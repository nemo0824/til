import { AuthNavigation } from './AuthNavigation';
import { DrawerNavigation } from './DrawerNavigation';

export function RootNavigation() {
  const isLogin = false;
  return <>{!isLogin ? <AuthNavigation /> : <DrawerNavigation />}</>;
}
