import { AuthNavigation } from './AuthNavigation';
import { DrawerNavigation } from './DrawerNavigation';

export function RootNavigation() {
  const isLogin = true;
  return <>{!isLogin ? <AuthNavigation /> : <DrawerNavigation />}</>;
}
