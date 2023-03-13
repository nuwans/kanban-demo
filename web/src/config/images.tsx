export enum IconName {
  logo = "logo",
  nameLight = "name-light",
  nameDark = "name-dark",
  sideBarIcon = "sidebar-icon",
  sideBarIconHover = "sidebar-icon-hover",
  sideBarIconPurpule = "sidebar-icon-purpule",
  light = "light",
  dark = "dark",
  sidebarToggle = "sidebar-toggle",
  eye = "eye",
  threeDots = "three-dots",
  remove = "remove",
}
interface Props {
  icon: string;
  onClick?:()=>void
}
const Image = ({ icon }: Props) => {
  const getImage = (icon: string) => {
    switch (icon) {
      case IconName.logo:
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="6" height="25" rx="2" fill="#635FC7" />
            <rect
              opacity="0.75"
              x="9"
              width="6"
              height="25"
              rx="2"
              fill="#635FC7"
            />
            <rect
              opacity="0.5"
              x="18"
              width="6"
              height="25"
              rx="2"
              fill="#635FC7"
            />
          </svg>
        );
      case IconName.nameDark:
        return (
          <svg
            width="114"
            height="26"
            viewBox="0 0 114 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56001 24.9999V19.6559L7.48001 17.5439L11.928 24.9999H17.368L11.064 14.5679L17.4 7.52788H11.48L5.56001 13.8319V0.775879H0.76001V24.9999H5.56001ZM24.92 25.3839C27.096 25.3839 28.8453 24.7119 30.168 23.3679V24.9999H34.648V13.4799C34.648 12.2212 34.3333 11.1172 33.704 10.1679C33.0747 9.21855 32.1947 8.47721 31.064 7.94388C29.9333 7.41055 28.632 7.14388 27.16 7.14388C25.304 7.14388 23.6773 7.57055 22.28 8.42388C20.8827 9.27721 19.928 10.4292 19.416 11.8799L23.256 13.7039C23.5547 12.9359 24.0293 12.3172 24.68 11.8479C25.3307 11.3785 26.0827 11.1439 26.936 11.1439C27.832 11.1439 28.5413 11.3679 29.064 11.8159C29.5867 12.2639 29.848 12.8185 29.848 13.4799V13.9599L25.016 14.7279C22.9253 15.0692 21.368 15.7199 20.344 16.6799C19.32 17.6399 18.808 18.8559 18.808 20.3279C18.808 21.9065 19.3573 23.1439 20.456 24.0399C21.5547 24.9359 23.0427 25.3839 24.92 25.3839ZM24.376 21.4159C24.7813 21.7145 25.2827 21.8639 25.88 21.8639C27.0747 21.8639 28.0347 21.4905 28.76 20.7439C29.4853 19.9972 29.848 19.0905 29.848 18.0239V17.4799L25.88 18.1839C25.1973 18.3119 24.6747 18.5305 24.312 18.8399C23.9493 19.1492 23.768 19.5919 23.768 20.1679C23.768 20.7012 23.9707 21.1172 24.376 21.4159ZM42.968 24.9999V14.7919C42.968 13.7892 43.2667 12.9839 43.864 12.3759C44.4613 11.7679 45.2293 11.4639 46.168 11.4639C47.1067 11.4639 47.8747 11.7679 48.472 12.3759C49.0693 12.9839 49.368 13.7892 49.368 14.7919V24.9999H54.168V13.7679C54.168 12.4452 53.8907 11.2879 53.336 10.2959C52.7813 9.30388 52.008 8.53055 51.016 7.97588C50.024 7.42121 48.8667 7.14388 47.544 7.14388C46.4347 7.14388 45.4533 7.35188 44.6 7.76788C43.7467 8.18388 43.096 8.81855 42.648 9.67188V7.52788H38.168V24.9999H42.968ZM71.704 24.1679C70.36 24.9785 68.8347 25.3839 67.128 25.3839C66.0613 25.3839 65.064 25.2079 64.136 24.8559C63.208 24.5039 62.4347 23.9972 61.816 23.3359V24.9999H57.336V0.775879H62.136V8.99988C63.3733 7.76255 65.048 7.14388 67.16 7.14388C68.824 7.14388 70.328 7.54921 71.672 8.35988C73.016 9.17055 74.0827 10.2639 74.872 11.6399C75.6613 13.0159 76.056 14.5572 76.056 16.2639C76.056 17.9492 75.6667 19.4852 74.888 20.8719C74.1093 22.2585 73.048 23.3572 71.704 24.1679ZM66.552 21.0639C65.2507 21.0639 64.1893 20.6212 63.368 19.7359C62.5467 18.8505 62.136 17.6932 62.136 16.2639C62.136 14.8559 62.5467 13.7039 63.368 12.8079C64.1893 11.9119 65.2507 11.4639 66.552 11.4639C67.8747 11.4639 68.9627 11.9172 69.816 12.8239C70.6693 13.7305 71.096 14.8772 71.096 16.2639C71.096 17.6719 70.6693 18.8239 69.816 19.7199C68.9627 20.6159 67.8747 21.0639 66.552 21.0639ZM89.528 23.3679C88.2053 24.7119 86.456 25.3839 84.28 25.3839C82.4027 25.3839 80.9147 24.9359 79.816 24.0399C78.7173 23.1439 78.168 21.9065 78.168 20.3279C78.168 18.8559 78.68 17.6399 79.704 16.6799C80.728 15.7199 82.2853 15.0692 84.376 14.7279L89.208 13.9599V13.4799C89.208 12.8185 88.9467 12.2639 88.424 11.8159C87.9013 11.3679 87.192 11.1439 86.296 11.1439C85.4427 11.1439 84.6907 11.3785 84.04 11.8479C83.3893 12.3172 82.9147 12.9359 82.616 13.7039L78.776 11.8799C79.288 10.4292 80.2427 9.27721 81.64 8.42388C83.0373 7.57055 84.664 7.14388 86.52 7.14388C87.992 7.14388 89.2933 7.41055 90.424 7.94388C91.5547 8.47721 92.4347 9.21855 93.064 10.1679C93.6933 11.1172 94.008 12.2212 94.008 13.4799V24.9999H89.528V23.3679ZM85.24 21.8639C84.6427 21.8639 84.1413 21.7145 83.736 21.4159C83.3307 21.1172 83.128 20.7012 83.128 20.1679C83.128 19.5919 83.3093 19.1492 83.672 18.8399C84.0347 18.5305 84.5573 18.3119 85.24 18.1839L89.208 17.4799V18.0239C89.208 19.0905 88.8453 19.9972 88.12 20.7439C87.3947 21.4905 86.4347 21.8639 85.24 21.8639ZM102.328 14.7919V24.9999H97.528V7.52788H102.008V9.67188C102.456 8.81855 103.107 8.18388 103.96 7.76788C104.813 7.35188 105.795 7.14388 106.904 7.14388C108.227 7.14388 109.384 7.42121 110.376 7.97588C111.368 8.53055 112.141 9.30388 112.696 10.2959C113.251 11.2879 113.528 12.4452 113.528 13.7679V24.9999H108.728V14.7919C108.728 13.7892 108.429 12.9839 107.832 12.3759C107.235 11.7679 106.467 11.4639 105.528 11.4639C104.589 11.4639 103.821 11.7679 103.224 12.3759C102.627 12.9839 102.328 13.7892 102.328 14.7919Z"
              fill="white"
            />
          </svg>
        );
      case IconName.nameLight:
        return (
          <svg
            width="114"
            height="26"
            viewBox="0 0 114 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.56001 24.9999V19.6559L7.48001 17.5439L11.928 24.9999H17.368L11.064 14.5679L17.4 7.52788H11.48L5.56001 13.8319V0.775879H0.76001V24.9999H5.56001ZM24.92 25.3839C27.096 25.3839 28.8453 24.7119 30.168 23.3679V24.9999H34.648V13.4799C34.648 12.2212 34.3333 11.1172 33.704 10.1679C33.0747 9.21855 32.1947 8.47721 31.064 7.94388C29.9333 7.41055 28.632 7.14388 27.16 7.14388C25.304 7.14388 23.6773 7.57055 22.28 8.42388C20.8827 9.27721 19.928 10.4292 19.416 11.8799L23.256 13.7039C23.5547 12.9359 24.0293 12.3172 24.68 11.8479C25.3307 11.3785 26.0827 11.1439 26.936 11.1439C27.832 11.1439 28.5413 11.3679 29.064 11.8159C29.5867 12.2639 29.848 12.8185 29.848 13.4799V13.9599L25.016 14.7279C22.9253 15.0692 21.368 15.7199 20.344 16.6799C19.32 17.6399 18.808 18.8559 18.808 20.3279C18.808 21.9065 19.3573 23.1439 20.456 24.0399C21.5547 24.9359 23.0427 25.3839 24.92 25.3839ZM24.376 21.4159C24.7813 21.7145 25.2827 21.8639 25.88 21.8639C27.0747 21.8639 28.0347 21.4905 28.76 20.7439C29.4853 19.9972 29.848 19.0905 29.848 18.0239V17.4799L25.88 18.1839C25.1973 18.3119 24.6747 18.5305 24.312 18.8399C23.9493 19.1492 23.768 19.5919 23.768 20.1679C23.768 20.7012 23.9707 21.1172 24.376 21.4159ZM42.968 24.9999V14.7919C42.968 13.7892 43.2667 12.9839 43.864 12.3759C44.4613 11.7679 45.2293 11.4639 46.168 11.4639C47.1067 11.4639 47.8747 11.7679 48.472 12.3759C49.0693 12.9839 49.368 13.7892 49.368 14.7919V24.9999H54.168V13.7679C54.168 12.4452 53.8907 11.2879 53.336 10.2959C52.7813 9.30388 52.008 8.53055 51.016 7.97588C50.024 7.42121 48.8667 7.14388 47.544 7.14388C46.4347 7.14388 45.4533 7.35188 44.6 7.76788C43.7467 8.18388 43.096 8.81855 42.648 9.67188V7.52788H38.168V24.9999H42.968ZM71.704 24.1679C70.36 24.9785 68.8347 25.3839 67.128 25.3839C66.0613 25.3839 65.064 25.2079 64.136 24.8559C63.208 24.5039 62.4347 23.9972 61.816 23.3359V24.9999H57.336V0.775879H62.136V8.99988C63.3733 7.76255 65.048 7.14388 67.16 7.14388C68.824 7.14388 70.328 7.54921 71.672 8.35988C73.016 9.17055 74.0827 10.2639 74.872 11.6399C75.6613 13.0159 76.056 14.5572 76.056 16.2639C76.056 17.9492 75.6667 19.4852 74.888 20.8719C74.1093 22.2585 73.048 23.3572 71.704 24.1679ZM66.552 21.0639C65.2507 21.0639 64.1893 20.6212 63.368 19.7359C62.5467 18.8505 62.136 17.6932 62.136 16.2639C62.136 14.8559 62.5467 13.7039 63.368 12.8079C64.1893 11.9119 65.2507 11.4639 66.552 11.4639C67.8747 11.4639 68.9627 11.9172 69.816 12.8239C70.6693 13.7305 71.096 14.8772 71.096 16.2639C71.096 17.6719 70.6693 18.8239 69.816 19.7199C68.9627 20.6159 67.8747 21.0639 66.552 21.0639ZM89.528 23.3679C88.2053 24.7119 86.456 25.3839 84.28 25.3839C82.4027 25.3839 80.9147 24.9359 79.816 24.0399C78.7173 23.1439 78.168 21.9065 78.168 20.3279C78.168 18.8559 78.68 17.6399 79.704 16.6799C80.728 15.7199 82.2853 15.0692 84.376 14.7279L89.208 13.9599V13.4799C89.208 12.8185 88.9467 12.2639 88.424 11.8159C87.9013 11.3679 87.192 11.1439 86.296 11.1439C85.4427 11.1439 84.6907 11.3785 84.04 11.8479C83.3893 12.3172 82.9147 12.9359 82.616 13.7039L78.776 11.8799C79.288 10.4292 80.2427 9.27721 81.64 8.42388C83.0373 7.57055 84.664 7.14388 86.52 7.14388C87.992 7.14388 89.2933 7.41055 90.424 7.94388C91.5547 8.47721 92.4347 9.21855 93.064 10.1679C93.6933 11.1172 94.008 12.2212 94.008 13.4799V24.9999H89.528V23.3679ZM85.24 21.8639C84.6427 21.8639 84.1413 21.7145 83.736 21.4159C83.3307 21.1172 83.128 20.7012 83.128 20.1679C83.128 19.5919 83.3093 19.1492 83.672 18.8399C84.0347 18.5305 84.5573 18.3119 85.24 18.1839L89.208 17.4799V18.0239C89.208 19.0905 88.8453 19.9972 88.12 20.7439C87.3947 21.4905 86.4347 21.8639 85.24 21.8639ZM102.328 14.7919V24.9999H97.528V7.52788H102.008V9.67188C102.456 8.81855 103.107 8.18388 103.96 7.76788C104.813 7.35188 105.795 7.14388 106.904 7.14388C108.227 7.14388 109.384 7.42121 110.376 7.97588C111.368 8.53055 112.141 9.30388 112.696 10.2959C113.251 11.2879 113.528 12.4452 113.528 13.7679V24.9999H108.728V14.7919C108.728 13.7892 108.429 12.9839 107.832 12.3759C107.235 11.7679 106.467 11.4639 105.528 11.4639C104.589 11.4639 103.821 11.7679 103.224 12.3759C102.627 12.9839 102.328 13.7892 102.328 14.7919Z"
              fill="#000112"
            />
          </svg>
        );
      case IconName.sideBarIconHover:
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
              fill="white"
            />
          </svg>
        );
      case IconName.sideBarIcon:
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
              fill="#828FA3"
            />
          </svg>
        );
      case IconName.light:
        return (
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.75589 0.244082C9.59969 0.087798 9.38769 0 9.16667 0C8.94566 0 8.73369 0.087798 8.57741 0.244082C8.42113 0.400362 8.33334 0.612322 8.33334 0.833332V1.66666C8.33334 1.88768 8.42113 2.09964 8.57741 2.25592C8.73369 2.4122 8.94566 2.5 9.16667 2.5C9.38769 2.5 9.59969 2.4122 9.75589 2.25592C9.91219 2.09964 9.99999 1.88768 9.99999 1.66666V0.833332C9.99999 0.612322 9.91219 0.400362 9.75589 0.244082ZM2.5 1.66684C2.27903 1.66684 2.06711 1.75461 1.91084 1.91083C1.75461 2.0671 1.66685 2.27903 1.66685 2.5C1.66685 2.72097 1.75461 2.93289 1.91084 3.08916L3.16084 4.33916C3.318 4.49096 3.52851 4.57496 3.747 4.57306C3.9655 4.57116 4.17451 4.48352 4.32902 4.32901C4.48352 4.17451 4.57117 3.9655 4.57306 3.747C4.57496 3.5285 4.49097 3.318 4.33917 3.16083L3.08917 1.91083C2.9329 1.75461 2.72097 1.66684 2.5 1.66684ZM16.6665 2.5C16.6665 2.27903 16.5787 2.0671 16.4225 1.91083C16.2662 1.75461 16.0543 1.66684 15.8333 1.66684C15.6124 1.66684 15.4005 1.75461 15.2442 1.91083L13.9942 3.16083C13.9146 3.2377 13.8511 3.32966 13.8074 3.43133C13.7638 3.533 13.7408 3.64235 13.7398 3.753C13.7388 3.86365 13.7599 3.97338 13.8018 4.07579C13.8437 4.17821 13.9056 4.27125 13.9838 4.34949C14.0621 4.42774 14.1551 4.48962 14.2576 4.53152C14.36 4.57342 14.4697 4.5945 14.5803 4.59354C14.691 4.59258 14.8003 4.56959 14.902 4.52592C15.0037 4.48224 15.0956 4.41876 15.1725 4.33916L16.4225 3.08916C16.5787 2.93289 16.6665 2.72097 16.6665 2.5ZM0.244077 8.57741C0.087797 8.73369 0 8.94565 0 9.16666C0 9.38767 0.087797 9.59967 0.244077 9.75587C0.400357 9.91217 0.612317 9.99997 0.833337 9.99997H1.66667C1.88768 9.99997 2.09964 9.91217 2.25593 9.75587C2.41221 9.59967 2.5 9.38767 2.5 9.16666C2.5 8.94565 2.41221 8.73369 2.25593 8.57741C2.09964 8.42113 1.88768 8.33333 1.66667 8.33333H0.833337C0.612317 8.33333 0.400357 8.42113 0.244077 8.57741ZM16.0774 8.57741C15.9211 8.73369 15.8333 8.94565 15.8333 9.16666C15.8333 9.38767 15.9211 9.59967 16.0774 9.75587C16.2337 9.91217 16.4457 9.99997 16.6667 9.99997H17.5C17.721 9.99997 17.933 9.91217 18.0893 9.75587C18.2455 9.59967 18.3333 9.38767 18.3333 9.16666C18.3333 8.94565 18.2455 8.73369 18.0893 8.57741C17.933 8.42113 17.721 8.33333 17.5 8.33333H16.6667C16.4457 8.33333 16.2337 8.42113 16.0774 8.57741ZM4.58316 14.5834C4.58316 14.3624 4.49539 14.1505 4.33917 13.9942C4.1829 13.838 3.97097 13.7502 3.75 13.7502C3.52903 13.7502 3.31711 13.838 3.16084 13.9942L1.91084 15.2442C1.75904 15.4014 1.67504 15.6119 1.67694 15.8304C1.67884 16.0489 1.76648 16.2579 1.92099 16.4124C2.07549 16.5669 2.2845 16.6545 2.503 16.6564C2.7215 16.6583 2.932 16.5743 3.08917 16.4225L4.33917 15.1725C4.49539 15.0163 4.58316 14.8043 4.58316 14.5834ZM14.5833 13.7502C14.3624 13.7502 14.1505 13.838 13.9942 13.9942C13.838 14.1505 13.7502 14.3624 13.7502 14.5834C13.7502 14.8043 13.838 15.0163 13.9942 15.1725L15.2442 16.4225C15.4013 16.5743 15.6118 16.6583 15.8303 16.6564C16.0488 16.6545 16.2579 16.5669 16.4124 16.4124C16.5669 16.2579 16.6545 16.0489 16.6564 15.8304C16.6583 15.6119 16.5743 15.4014 16.4225 15.2442L15.1725 13.9942C15.0162 13.838 14.8043 13.7502 14.5833 13.7502ZM9.75589 16.0774C9.59969 15.9212 9.38769 15.8334 9.16667 15.8334C8.94566 15.8334 8.73369 15.9212 8.57741 16.0774C8.42113 16.2337 8.33334 16.4457 8.33334 16.6667V17.5C8.33334 17.721 8.42113 17.933 8.57741 18.0893C8.73369 18.2456 8.94566 18.3334 9.16667 18.3334C9.38769 18.3334 9.59969 18.2456 9.75589 18.0893C9.91219 17.933 9.99999 17.721 9.99999 17.5V16.6667C9.99999 16.4457 9.91219 16.2337 9.75589 16.0774ZM6.22039 6.22039C7.00179 5.43899 8.0616 5 9.16667 5C10.2717 5 11.3316 5.43899 12.113 6.22039C12.8944 7.00179 13.3333 8.0616 13.3333 9.16666C13.3333 10.2718 12.8944 11.3316 12.113 12.113C11.3316 12.8944 10.2717 13.3334 9.16667 13.3334C8.0616 13.3334 7.00179 12.8944 6.22039 12.113C5.43899 11.3316 5 10.2718 5 9.16666C5 8.0616 5.43899 7.00179 6.22039 6.22039Z"
              fill="#828FA3"
            />
          </svg>
        );
      case IconName.dark:
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.9084 10.3675C15.3159 10.1875 15.8017 10.5325 15.6317 10.9375C14.4717 13.7125 11.6884 15.6667 8.43839 15.6667C4.14586 15.6667 0.666687 12.2575 0.666687 8.05168C0.666687 4.51085 3.13336 1.53418 6.47419 0.681675C6.90752 0.571675 7.19169 1.08835 6.95502 1.46168C6.33657 2.43582 6.00875 3.56613 6.01002 4.72002C6.01002 8.13752 8.83669 10.9075 12.3242 10.9075C13.2137 10.909 14.0938 10.7251 14.9084 10.3675ZM10.5017 1.42584C10.2075 0.984175 10.7342 0.457505 11.1759 0.752505L11.9634 1.27751C12.2827 1.49048 12.6579 1.60414 13.0417 1.60414C13.4255 1.60414 13.8007 1.49048 14.12 1.27751L14.9067 0.752505C15.3492 0.457505 15.8759 0.984175 15.5809 1.42584L15.0559 2.21334C14.8429 2.53265 14.7292 2.90786 14.7292 3.29168C14.7292 3.67549 14.8429 4.05071 15.0559 4.37001L15.5809 5.15751C15.8759 5.59918 15.3492 6.12583 14.9075 5.83084L14.12 5.30584C13.8007 5.09286 13.4255 4.97922 13.0417 4.97922C12.6579 4.97922 12.2827 5.09286 11.9634 5.30584L11.1767 5.83084C10.735 6.12583 10.2075 5.59918 10.5017 5.15751L11.0267 4.37001C11.2397 4.05071 11.3533 3.67549 11.3533 3.29168C11.3533 2.90786 11.2397 2.53265 11.0267 2.21334L10.5017 1.42584Z"
              fill="#828FA3"
            />
          </svg>
        );
      case IconName.sidebarToggle:
        return (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7923 8.76153C16.7538 10.5238 15.1854 11.941 13.3062 12.8081L14.8099 14.9563C14.9286 15.1259 14.8874 15.3598 14.7177 15.4785L14.0697 15.9322C13.9 16.051 13.6662 16.0097 13.5474 15.84L3.19013 1.04373C3.07135 0.874074 3.11263 0.64023 3.28229 0.521481L3.93032 0.067825C4.09998 -0.050956 4.33382 -0.00967486 4.45257 0.159981L6.18775 2.63888C7.08163 2.38573 8.02525 2.25001 9 2.25001C12.7456 2.25001 16.0311 4.24982 17.7923 7.23847C18.0692 7.7084 18.0692 8.2916 17.7923 8.76153ZM1.50001 8C2.99714 10.5406 5.79513 12.25 9 12.25C9.07946 12.2499 9.15892 12.2487 9.23834 12.2465L10.239 13.676C9.82784 13.7253 9.4141 13.75 9 13.75C5.25438 13.75 1.96889 11.7502 0.207702 8.76156C-0.069234 8.29163 -0.069234 7.7084 0.207702 7.23847C0.997544 5.89816 2.09379 4.75732 3.4001 3.90623L4.26076 5.13569C3.12813 5.86432 2.17986 6.84635 1.50001 8ZM8.52194 11.2231C6.00685 10.9415 4.26532 8.50791 4.86788 6.00303L8.52194 11.2231ZM9.74494 3.78104C12.6351 4.02282 15.1201 5.65835 16.5 8C15.5721 9.57456 14.1446 10.8297 12.4302 11.5566L11.596 10.3649C13.2731 9.06931 13.7072 6.7886 12.75 4.99869L12.75 5C12.75 5.9665 11.9665 6.75 11 6.75C10.0335 6.75 9.25 5.9665 9.25 5C9.25 4.52594 9.43881 4.09619 9.74494 3.78104Z"
              fill="#828FA3"
            />
          </svg>
        );
      case IconName.eye:
        return (
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8154 4.43419C14.2491 1.77636 11.328 0 8 0C4.67056 0 1.75012 1.77761 0.184624 4.43419C-0.0615413 4.8519 -0.0615413 5.37033 0.184624 5.78805C1.75087 8.44585 4.67195 10.2222 8 10.2222C11.3294 10.2222 14.2499 8.4446 15.8154 5.78802C16.0615 5.37031 16.0615 4.85189 15.8154 4.43419ZM8 8.88887C5.91217 8.88887 4.22223 7.19924 4.22223 5.1111C4.22223 3.02327 5.91184 1.33333 8 1.33333C10.0878 1.33333 11.7778 3.02294 11.7778 5.1111C11.7778 7.19893 10.0882 8.88887 8 8.88887ZM8 7.99999C9.5955 7.99999 10.8889 6.7066 10.8889 5.1111C10.8889 3.51561 9.5955 2.22222 8 2.22222C7.50811 2.22222 7.04503 2.3453 6.63964 2.56211L6.64053 2.56208C7.2975 2.56208 7.83008 3.09466 7.83008 3.75163C7.83008 4.40858 7.2975 4.94116 6.64053 4.94116C5.98356 4.94116 5.45098 4.4086 5.45098 3.75163L5.451 3.75074C5.2342 4.15613 5.11112 4.61921 5.11112 5.1111C5.11112 6.7066 6.4045 7.99999 8 7.99999Z"
              fill="white"
            />
          </svg>
        );
      case IconName.threeDots:
        return (
          <svg
            width="5"
            height="20"
            viewBox="0 0 5 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
            <circle cx="2.30769" cy="10.0001" r="2.30769" fill="#828FA3" />
            <circle cx="2.30769" cy="17.6925" r="2.30769" fill="#828FA3" />
          </svg>
        );
      case IconName.sideBarIconPurpule:
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z"
              fill="#635FC7"
            />
          </svg>
        );
      case IconName.remove:
        return (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="12.7275"
              width="3"
              height="18"
              transform="rotate(45 12.7275 0)"
              fill="#828FA3"
            />
            <rect
              y="2.12132"
              width="3"
              height="18"
              transform="rotate(-45 0 2.12132)"
              fill="#828FA3"
            />
          </svg>
        );

      default:
        return null;
    }
  };
  return getImage(icon);
};

export default Image;
