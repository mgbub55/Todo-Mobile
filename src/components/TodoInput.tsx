import { createHomeStyles } from "@/assets/home.styles";
// eslint-disable-next-line import/no-unresolved
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { api } from "../../convex/_generated/api";

const TodoInput = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const [newTodo, setNewTodo] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const addTodo = useMutation(api.todos.addTodo);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        await addTodo({
          text: newTodo.trim(),
        });
        setNewTodo("");
      } catch (error) {
        console.log("Error adding a Todo", error);
        Alert.alert("Error", "Failed to add todo");
      }
    }
  };

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={[homeStyles.input, isFocused && homeStyles.inputFocused]}
          placeholder="What needs to be done?"
          placeholderTextColor={colors.textMuted}
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <LinearGradient
          colors={colors.gradients.primary}
          style={[
            homeStyles.addButton,
            !newTodo.trim() && homeStyles.addButtonDisabled,
          ]}
        >
          <TouchableOpacity onPress={handleAddTodo} disabled={!newTodo.trim()}>
            <Ionicons name="add" size={28} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default TodoInput;
