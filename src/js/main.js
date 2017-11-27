import MiradorProxyManager from './mirador-proxy-manager';
import MiradorProxy from './mirador-proxy';
import WindowProxy from './window-proxy';
import WorkspaceProxy from './workspace-proxy';

window.MiradorProxy = {
  MiradorProxyManager: MiradorProxyManager,
  MiradorProxy: MiradorProxy,
  WindowProxy: WindowProxy,
  WorkspaceProxy: WorkspaceProxy
};