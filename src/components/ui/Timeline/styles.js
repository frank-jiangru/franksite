import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Timeline = styled.div`
  ${tw`flex flex-col sm:flex-row w-full p-4 relative border-l border-gray-600`};

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Details = styled.div`
  ${tw`w-full sm:w-1/3`};
`;

export const Content = styled.div`
  ${tw`w-full sm:w-2/3 mt-4 sm:mt-0`};
`;

export const Title = styled.div`
  ${tw`font-semibold mt-3`};
`;

export const Subtitle = styled.div`
  ${tw`text-xs`};
`;

export const Date = styled.div`
  ${tw`text-xs border border-gray-500 rounded-full px-2`};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-gray-600 bg-gray-400 rounded-full absolute`};
  left: -6px;
  top: 20px;
`;
