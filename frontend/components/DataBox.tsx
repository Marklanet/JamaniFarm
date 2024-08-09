import { TouchableOpacity, Image, Text, ImageSourcePropType, ViewStyle } from 'react-native';
import React from 'react';

interface DataBoxProps {
  icon: ImageSourcePropType;
  value: string;
  title: string;
  className?: string;
  textStyles?: string;
  style?: ViewStyle;
}

const DataBox: React.FC<DataBoxProps> = ({ icon, value, title, className, textStyles, style }) => {
  return (
    <TouchableOpacity
  
    className={`p-4 mb-2 w-[48%] bg-[#ffffff45] rounded-lg shadow-md flex items-center justify-center ${className}`}

    >
      <Image
        source={icon}
        className="w-12 h-12 mb-0"
        resizeMode="contain"
      />
      <Text className={`text-white font-semibold text-md text-center ${textStyles}`}>
        {title}
      </Text>
      <Text className={` font-semibold text-lg text-center text-yellow-500 ${textStyles}`}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default DataBox;
