import { TouchableOpacity, Image, Text, ImageSourcePropType, ViewStyle } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface DarkDataBoxProps {
  icon: ImageSourcePropType;
  value: string;
  title: string;
  className?: string;
  textStyles?: string;
  style?: ViewStyle;
}

const DarkDataBox: React.FC<DarkDataBoxProps> = ({ icon, value, title, className, textStyles, style }) => {
  return (
    <TouchableOpacity
    className={`w-[48%] rounded-lg`}
    >
      <LinearGradient
        colors={['#00b300', 'green']} // Light green to dark green
        className={`p-4 mb-2 w-full bg-secondary rounded-lg shadow-md flex items-center justify-center ${className}`}
      >
        <Image
          source={icon}
          style={{ width: 48, height: 48, marginBottom: 0 }}
          resizeMode="contain"
        />
        <Text style={{ color: '#000', fontWeight: '600', fontSize: 16, textAlign: 'center' }} className={textStyles}>
          {title}
        </Text>
        <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 20, textAlign: 'center' }} className={textStyles}>
          {value}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default DarkDataBox;
