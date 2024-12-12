import { View } from 'react-native';

import { s } from './styles';

type Props = {
  data: [];
};

export function Places({ data }: Props) {
  return <View style={s.container}>{/* renderizar lista de lugares */}</View>;
}
