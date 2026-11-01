interface ImportMetaEnv {
  /** 문의 폼 전송 주소(예: https://formspree.io/f/xxxx). 비우면 메일 앱으로 보냅니다. */
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
