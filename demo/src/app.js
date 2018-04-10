console.log('Ericsson Design System v1.1.0');

// Import the style files
import './common/styles.less';
// Import the script files
//  - Layout
import { Layout } from './common/scripts/Layout';
//  - Tree (Navigation)
import { Tree } from './trees/Tree';

const layout = new Layout(document.querySelector('body'));
layout.init();

//  - Tree (Navigation)
import { Tree } from './trees/Tree';
const tree = new Tree(document.querySelector('.appnav .tree.navigation'));
tree.init();
