import React from 'react';
import Lottie from 'react-lottie';

interface Props {
  type: string;
  size?: number;
}

export default function Animation({ type, size }: Props) {
  const dimensions = size || 250;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/animations/${type}`),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Lottie options={defaultOptions} height={dimensions} width={dimensions} />
  );
}

