import { copyLibFiles } from '@builder.io/partytown/utils';
import * as path from 'path';

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'));
};
