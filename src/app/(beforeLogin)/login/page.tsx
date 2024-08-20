'use client';

import { useRouter } from 'next/navigation';
import HomeBackground from '../_component/HomeBackground';

/** redirect */
export default function Login() {
  const router = useRouter();
  router.replace('i/flow/login');
  return <HomeBackground />;
}

// router.push
// 현재주소가 localhost:3001/login
// router.push('i/flow/login')
// 결과 :localhost:3001/i/flow/login
// 뒤로가기하면 localhost:3001/login

// router.replace
// 현재주소가 localhost:3001/login
// router.replace('i/flow/login')
// 결과 : localhost:3001/i/flow/login
// 뒤로 가기 하면 login보다 전 localhost:3001
