import getMiradorProxyManager from './mirador-proxy-manager';
import MiradorProxy from './mirador-proxy';
import WindowProxy from './window-proxy';
import WorkspaceProxy from './workspace-proxy';

window.MiradorProxy = {
  getMiradorProxyManager: getMiradorProxyManager,
  MiradorProxy: MiradorProxy,
  WindowProxy: WindowProxy,
  WorkspaceProxy: WorkspaceProxy
};
