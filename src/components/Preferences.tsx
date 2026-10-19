import { createSettingsStyles } from "@/assets/settings.styles";
// eslint-disable-next-line import/no-unresolved
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnable, setIsNotificationEnable] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitle}>Preferences</Text>
      {/* Dark Mode */}
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="moon" color="#fff" size={18} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={isDarkMode ? "#fff" : colors.primary}
          ios_backgroundColor={isDarkMode ? colors.primary : "#fff"}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>

      {/* Notifications */}

      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="notifications" color="#fff" size={18} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          trackColor={{ false: colors.border, true: colors.warning }}
          thumbColor={isNotificationEnable ? "#fff" : colors.warning}
          ios_backgroundColor={isNotificationEnable ? colors.warning : "#fff"}
          onValueChange={setIsNotificationEnable}
          value={isNotificationEnable}
        />
      </View>

      {/* Auto Sync */}
      <View style={settingStyles.settingItem}>
        <View style={settingStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingStyles.settingIcon}
          >
            <Ionicons name="sync" color="#fff" size={18} />
          </LinearGradient>
          <Text style={settingStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          trackColor={{ false: colors.border, true: colors.success }}
          thumbColor={isAutoSync ? "#fff" : colors.success}
          ios_backgroundColor={isAutoSync ? colors.success : "#fff"}
          onValueChange={setIsAutoSync}
          value={isAutoSync}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
