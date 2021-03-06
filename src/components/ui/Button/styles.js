import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-gray-500 text-white`};

  ${({ primary }) => (primary ? tw`bg-gray-600` : tw`text-gray-500`)};

  ${({ block }) => block && tw`w-full`};
`);
