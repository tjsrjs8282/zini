interface ImportMetaEnv {
  /**
   * 문의 폼 전송 주소(예: https://formspree.io/f/xxxx — JSON POST를 받는 서비스).
   * 비우면 데모 모드로 동작해 실제로 전송하지 않고 안내 문구만 보여 줍니다.
   */
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
