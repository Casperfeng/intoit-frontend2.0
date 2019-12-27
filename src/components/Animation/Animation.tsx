import React from 'react';
import Lottie from 'react-lottie';

interface Props {
  type: string;
}

export default function Animation({ type }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/animations/${type}`),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return <Lottie options={defaultOptions} height={250} width={250} />;
}
