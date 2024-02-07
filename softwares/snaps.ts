import { $ } from 'bun';
import { installSnap } from '../utils';

const Snaps = async () => {
  const snapSoftware = [
    'code --classic',
    'slack --classic',
    'bw',
    'termius-app', // teste
    'alacritty --classic',
  ];

  for (const software of snapSoftware) {
    installSnap(software);
  }
};

export default Snaps;