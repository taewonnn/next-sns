import { ReactNode } from 'react';
import styles from '@/app/page.module.css';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

/** before login 레이아웃 */
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children} {/** 같은 레벨의 page는 children이 보여짐 */}
      {modal} {/** @modal의 page는 modal을 통해 보여짐 */}
    </div>
  );
}

/** 💡parallel Routes
 * 하나의 레이아웃에서 두개 이상의 페이지를 rendering 하기 위해 사용
 * children 과 modal 두 개를 하나의 페이지에 렌더링!
 *
 * 조건) @modal 폴더가 같은 폴더 안에 있어야 작동
 */

/** 💡intercepting Routes
 * 화면을 가로챈다!
 * 클라이언트에서 라우팅할 때만 intercepting 가능!
 *
 * app/(beforeLogin)/page.tsx 파일에서 로그인 버튼은  <Link href="i/flow/login" className={styles.login}> i/flow/login으로 연결되니
 * 해당 경로의 page.tsx가 보여지는게 맞으나, @modal 폴더에 intercepting Routes인 (.)i > flow > login > page.tsx가 가로채서 해당 파일을 보여주는 형태
 *
 * 그럼 app/(beforeLogin)/i/flow/login/page.tsx 해당 경로의 파일은 필요가 없는가??
 * => 필요하다. 언제? -> 브라우저 통해서 처음 들어올 때, 혹은 모달이 띄어진 상태에서 새로고침할 때 보여진다!
 *
 *
 * (.) - 같은 경로
 * (..) - 해당 경로에서 한 단계 위의 경로
 * (..)(..) - 해당 경로에서 두 단계 위의 경로
 * (...) - app directory를 가로챈다.
 */
