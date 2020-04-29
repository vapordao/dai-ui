import React from "react";
import { Box, useThemeUI } from "theme-ui";

export const icons = {
  search: {
    path: (
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.36355 8.36379C9.84339 6.88395 9.84339 4.48465 8.36355 3.00481C6.88371 1.52497 4.48441 1.52497 3.00457 3.00481C1.52473 4.48465 1.52473 6.88395 3.00457 8.36379C4.48441 9.84363 6.88371 9.84363 8.36355 8.36379ZM9.70329 9.70354C11.9231 7.48378 11.9231 3.88483 9.70329 1.66507C7.48353 -0.554697 3.88458 -0.554696 1.66482 1.66507C-0.554941 3.88483 -0.554941 7.48378 1.66482 9.70354C3.88458 11.9233 7.48353 11.9233 9.70329 9.70354Z"
          fill="currentColor"
        />
        <path
          d="M7.69368 9.03367L9.03342 7.69392L13.7225 12.383C14.0925 12.753 14.0925 13.3528 13.7225 13.7228C13.3526 14.0927 12.7527 14.0927 12.3828 13.7228L7.69368 9.03367Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 24 24",
  },
  chevron_down: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.12117 0.7072C1.73064 0.316676 1.09748 0.316676 0.706956 0.7072C0.316431 1.09772 0.316431 1.73089 0.706956 2.12141L6.36381 7.77827C6.37601 7.79047 6.38845 7.80229 6.40112 7.81374C6.41063 7.82233 6.42026 7.8307 6.43002 7.83887C6.8229 8.16772 7.40894 8.14755 7.77813 7.77836L13.435 2.12151C13.8255 1.73098 13.8255 1.09782 13.435 0.707293C13.0445 0.316769 12.4113 0.316769 12.0208 0.707293L7.07102 5.65705L2.12117 0.7072Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 14 9",
  },
  chevron_up: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.12117 7.77815C1.73064 8.16868 1.09748 8.16868 0.706956 7.77815C0.316431 7.38763 0.316431 6.75446 0.706956 6.36394L6.36392 0.707086C6.75444 0.316571 7.3876 0.316572 7.77812 0.707088L13.435 6.36384C13.8255 6.75437 13.8255 7.38753 13.435 7.77806C13.0445 8.16858 12.4113 8.16858 12.0208 7.77806L7.07102 2.82831L2.12117 7.77815Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 14 9",
  },
  arrow_down: {
    path: (
      <path
        d="M6.6191 7.5512C6.81878 7.78632 7.18164 7.78632 7.38132 7.5512L13.0949 0.823607C13.3707 0.498824 13.1399 -5.67436e-05 12.7138 -5.67436e-05H1.28661C0.860499 -5.67436e-05 0.62967 0.498824 0.905502 0.823608L6.6191 7.5512Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 14 8",
  },
  arrow_up: {
    path: (
      <path
        d="M6.6191 0.448796C6.81878 0.213682 7.18164 0.213683 7.38132 0.448797L13.0949 7.17639C13.3707 7.50118 13.1399 8.00006 12.7138 8.00006H1.28661C0.860499 8.00006 0.62967 7.50118 0.905502 7.17639L6.6191 0.448796Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 14 8",
  },
  checkmark: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8096 1.0476C15.3356 1.49471 15.3995 2.28358 14.9524 2.80959L6.45244 12.8096C6.21697 13.0866 5.87255 13.2474 5.50898 13.25C5.14541 13.2526 4.79872 13.0968 4.5593 12.8232L1.0593 8.82316C0.604694 8.30361 0.657341 7.51391 1.17689 7.0593C1.69643 6.6047 2.48614 6.65735 2.94074 7.17689L5.4863 10.0861L13.0476 1.19046C13.4947 0.664455 14.2836 0.600493 14.8096 1.0476Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 16 14",
  },
  close: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5355 10.9497C9.92602 11.3402 10.5592 11.3402 10.9497 10.9497C11.3402 10.5592 11.3402 9.92602 10.9497 9.5355L7.4143 6.00008L10.9498 2.46458C11.3403 2.07406 11.3403 1.44089 10.9498 1.05037C10.5593 0.659843 9.9261 0.659843 9.53558 1.05037L6.00008 4.58587L2.46443 1.05022C2.07391 0.659693 1.44074 0.659693 1.05022 1.05022C0.659693 1.44074 0.659693 2.07391 1.05022 2.46443L4.58587 6.00008L1.0503 9.53565C0.659775 9.92617 0.659775 10.5593 1.0503 10.9499C1.44082 11.3404 2.07399 11.3404 2.46451 10.9499L6.00008 7.41429L9.5355 10.9497Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 12 12",
  },
  chevron_left: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.70711 0.707107C7.31658 0.316583 6.68342 0.316583 6.29289 0.707107L1.34315 5.65685L0.636039 6.36396C0.245515 6.75448 0.245515 7.38765 0.636039 7.77817L1.34315 8.48528L6.29289 13.435C6.68342 13.8256 7.31658 13.8256 7.70711 13.435C8.09763 13.0445 8.09763 12.4113 7.70711 12.0208L2.75736 7.07107L7.70711 2.12132C8.09763 1.7308 8.09763 1.09763 7.70711 0.707107Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 8 14",
  },
  chevron_right: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.707107C0.683417 0.316583 1.31658 0.316583 1.70711 0.707107L6.65685 5.65685L7.36396 6.36396C7.75448 6.75448 7.75449 7.38765 7.36396 7.77817L6.65685 8.48528L1.70711 13.435C1.31658 13.8256 0.683418 13.8256 0.292893 13.435C-0.0976314 13.0445 -0.0976307 12.4113 0.292893 12.0208L5.24264 7.07107L0.292893 2.12132C-0.097631 1.7308 -0.097631 1.09763 0.292893 0.707107Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 8 14",
  },
  decrease: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.70711 0.292893C1.31658 -0.0976315 0.683417 -0.0976315 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L10.5858 12H4C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14H12.9993H13.0007C13.5526 14 14 13.5526 14 13.0007V12.9993V4C14 3.44771 13.5523 3 13 3C12.4477 3 12 3.44771 12 4V10.5858L1.70711 0.292893Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 14 14",
  },
  delete: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1C5 0.447715 5.44772 0 6 0H10C10.5523 0 11 0.447715 11 1C11 1.55228 10.5523 2 10 2H6C5.44772 2 5 1.55228 5 1ZM0 4C0 3.44772 0.447715 3 1 3H2H14H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H14V12C14 14.2091 12.2091 16 10 16H6C3.79086 16 2 14.2091 2 12V5H1C0.447715 5 0 4.55228 0 4ZM4 5V12C4 13.1046 4.89543 14 6 14H10C11.1046 14 12 13.1046 12 12V5H4ZM6 7.5C6 7.22386 6.22386 7 6.5 7C6.77614 7 7 7.22386 7 7.5V11.5C7 11.7761 6.77614 12 6.5 12C6.22386 12 6 11.7761 6 11.5V7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5V11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5V7.5C10 7.22386 9.77614 7 9.5 7Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 16 16",
  },
  dots_h: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM14 4C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0C12.8954 0 12 0.895431 12 2C12 3.10457 12.8954 4 14 4Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 16 4",
  },
  dots_v: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C4 0.89543 3.10457 0 2 0C0.895431 1.19209e-07 0 0.895431 0 2C0 3.10457 0.895431 4 2 4C3.10457 4 4 3.10457 4 2ZM2 6C3.10457 6 4 6.89543 4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6ZM2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16C0.895431 16 0 15.1046 0 14C0 12.8954 0.895431 12 2 12Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 4 16",
  },
  edit: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0206 2.70708C16.6301 2.31655 15.9969 2.31655 15.6064 2.70708L6.41398 11.8995L5.70688 14.0208L7.8282 13.3137L17.0206 4.12129C17.4111 3.73077 17.4111 3.0976 17.0206 2.70708ZM4 2.99997H10H12L10 4.99997H4V16H15V9.99997L17 7.99997L17 9.99997V16C17 17.1045 16.1046 18 15 18H4C2.89543 18 2 17.1045 2 16V4.99997C2 3.8954 2.89543 2.99997 4 2.99997Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  eye: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5584 10.5605C17.8325 10.2314 17.8325 9.76861 17.5584 9.43948C16.4714 8.13383 13.4978 5 9.9999 5C6.50201 5 3.52845 8.13384 2.44137 9.43948C2.16733 9.76862 2.16733 10.2314 2.44137 10.5605C3.52845 11.8662 6.50201 15 9.9999 15C13.4978 15 16.4714 11.8662 17.5584 10.5605ZM10.9999 10C10.9999 10.5523 10.5522 11 9.9999 11C9.44762 11 8.9999 10.5523 8.9999 10C8.9999 9.44772 9.44762 9 9.9999 9C10.5522 9 10.9999 9.44772 10.9999 10ZM12.9999 10C12.9999 11.6569 11.6568 13 9.9999 13C8.34305 13 6.9999 11.6569 6.9999 10C6.9999 8.34315 8.34305 7 9.9999 7C11.6568 7 12.9999 8.34315 12.9999 10Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  increase: {
    path: (
      <path
        d="M4.70711 16.7071C4.31658 17.0976 3.68342 17.0976 3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929L13.5858 5H7C6.44772 5 6 4.55229 6 4C6 3.44771 6.44772 3 7 3H15.9993C16.0003 3 16.002 3 16.003 3C16.1375 3.0004 16.2657 3.02735 16.3828 3.07588C16.4999 3.12432 16.6096 3.19595 16.705 3.29078C16.7064 3.29219 16.7078 3.2936 16.7092 3.29502C16.9023 3.48924 16.9992 3.74301 17 3.997C17 3.998 17 3.999 17 4V13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13V6.41421L4.70711 16.7071Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  link: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3636 3.63641C14.8015 2.07431 12.2688 2.07431 10.7067 3.63641L7.8783 6.46484C6.31621 8.02693 6.31654 10.5594 7.87864 12.1215C8.26917 12.512 8.90233 12.512 9.29286 12.1215C9.68338 11.731 9.68338 11.0978 9.29286 10.7073L9.27675 10.6915C8.5115 9.90929 8.51676 8.65481 9.29252 7.87905L12.1209 5.05062C12.902 4.26957 14.1683 4.26958 14.9494 5.05062C15.7304 5.83167 15.7304 7.098 14.9494 7.87905L13.9481 8.88034C14.2651 9.68938 14.3633 10.5644 14.2426 11.4142L16.3636 9.29326C17.9257 7.73117 17.9257 5.19851 16.3636 3.63641ZM3.63628 16.364C5.19838 17.9261 7.73104 17.9261 9.29314 16.364L12.1216 13.5356C13.6837 11.9735 13.6837 9.4408 12.1216 7.8787C11.731 7.48818 11.0979 7.48818 10.7074 7.8787C10.3168 8.26923 10.3168 8.90239 10.7074 9.29292C11.4884 10.074 11.4884 11.3403 10.7074 12.1213L7.87892 14.9498C7.09788 15.7308 5.83155 15.7308 5.0505 14.9498C4.26945 14.1687 4.26945 12.9024 5.0505 12.1213L6.05179 11.12C5.73476 10.311 5.63658 9.43603 5.75726 8.58615L3.63628 10.7071C2.07419 12.2692 2.07419 14.8019 3.63628 16.364Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  duplicate: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C4 5.34315 5.34315 4 7 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H7C4.23858 2 2 4.23858 2 7V14C2 14.5523 2.44772 15 3 15C3.55228 15 4 14.5523 4 14V7ZM5 16C5 17.1046 5.89543 18 7 18H14C15.1046 18 16 17.1046 16 16V11V9.5C16 9.23478 15.8946 8.98043 15.7071 8.79289L12.2071 5.29289C12.0196 5.10536 11.7652 5 11.5 5H10H7C5.89543 5 5 5.89543 5 7V16ZM14 16V11H11C10.4477 11 10 10.5523 10 10V7H7V16H14Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  lock: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6V8C15.6569 8 17 9.34315 17 11V15C17 16.6569 15.6569 18 14 18H6C4.34315 18 3 16.6569 3 15V11C3 9.34315 4.34315 8 6 8V6ZM8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6V8H8V6ZM5 11C5 10.4477 5.44772 10 6 10H14C14.5523 10 15 10.4477 15 11V15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15V11Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  lock_open: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6C8 4.89543 8.89543 4 10 4C10.5922 4 11.1233 4.25615 11.491 4.66691C11.6638 4.85997 11.799 5.08589 11.8865 5.33325C12.0705 5.85396 12.6418 6.12689 13.1625 5.94284C13.6833 5.75879 13.9562 5.18747 13.7721 4.66675C13.5962 4.16887 13.325 3.71713 12.9812 3.33309C12.2502 2.51635 11.1848 2 10 2C7.79086 2 6 3.79086 6 6V8C4.34315 8 3 9.34315 3 11V15C3 16.6569 4.34315 18 6 18H14C15.6569 18 17 16.6569 17 15V11C17 9.34315 15.6569 8 14 8H8V6ZM6 10C5.44772 10 5 10.4477 5 11V15C5 15.5523 5.44772 16 6 16H14C14.5523 16 15 15.5523 15 15V11C15 10.4477 14.5523 10 14 10H6Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  menu: {
    path: (
      <g>
        <path
          d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44771 7 5 7H15C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5H5Z"
          fill="currentColor"
        />
        <path
          d="M4 10C4 9.44771 4.44772 9 5 9H13C13.5523 9 14 9.44771 14 10C14 10.5523 13.5523 11 13 11H5C4.44772 11 4 10.5523 4 10Z"
          fill="currentColor"
        />
        <path
          d="M4 14C4 13.4477 4.44772 13 5 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H5C4.44771 15 4 14.5523 4 14Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  notification: {
    path: (
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9813 4.27473C11.9936 4.18492 12 4.0932 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 4.09321 8.00638 4.18493 8.01872 4.27475C6.74659 4.65995 5.80668 5.42619 5.16137 6.4198C4.26174 7.80502 4.00003 9.52773 4.00003 11C4.00003 12.1043 3.6173 12.5587 3.37077 12.7583C3.22845 12.8736 3.0861 12.9394 2.98268 12.9755C2.93165 12.9934 2.89302 13.0029 2.87305 13.0073L2.86175 13.0096C2.34639 13.0814 1.97079 13.5377 2.00179 14.0593C2.03319 14.5876 2.47078 15 3.00003 15H17C17.5293 15 17.9669 14.5876 17.9983 14.0593C18.0293 13.5377 17.6537 13.0814 17.1383 13.0096L17.127 13.0073C17.107 13.0029 17.0684 12.9934 17.0174 12.9755C16.914 12.9394 16.7716 12.8736 16.6293 12.7583C16.3828 12.5587 16 12.1043 16 11C16 9.52773 15.7383 7.80502 14.8387 6.4198C14.1934 5.42617 13.2534 4.65993 11.9813 4.27473ZM17.1343 13.0091L17.1383 13.0096L17.1407 13.01L17.1343 13.0091ZM17.1343 13.0091L17.121 13.0073L17.1234 13.0076L17.1277 13.0082L17.1343 13.0091ZM6.83868 7.50913C6.23831 8.43355 6.00003 9.71085 6.00003 11C6.00003 11.8039 5.85477 12.4639 5.61916 13H14.3809C14.1453 12.4639 14 11.8039 14 11C14 9.71085 13.7617 8.43355 13.1614 7.50913C12.605 6.65251 11.6787 6 10 6C8.32133 6 7.39502 6.65251 6.83868 7.50913Z"
          fill="currentColor"
        />
        <path
          d="M8 16C8 16.3643 8.09739 16.7058 8.26756 17C8.61337 17.5978 9.25972 18 10 18C10.7403 18 11.3866 17.5978 11.7324 17C11.9026 16.7058 12 16.3643 12 16H8Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  open_in_new_tab: {
    path: (
      <g>
        <path
          d="M13.2071 2C12.7617 2 12.5386 2.53857 12.8536 2.85355L14.2929 4.29289L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L15.7071 5.70711L17.1464 7.14645C17.4614 7.46143 18 7.23835 18 6.79289V2.5C18 2.22386 17.7761 2 17.5 2H13.2071Z"
          fill="currentColor"
        />
        <path
          d="M11.4646 5H5C3.34315 5 2 6.34315 2 8V15C2 16.6569 3.34315 18 5 18H12C13.6569 18 15 16.6569 15 15V8.53567L13 10.5357V15C13 15.5523 12.5523 16 12 16H5C4.44772 16 4 15.5523 4 15V8C4 7.44772 4.44772 7 5 7H9.4646L11.4646 5Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  plus: {
    path: (
      <path
        d="M9 16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H11V4C11 3.44772 10.5523 3 10 3C9.44771 3 9 3.44772 9 4V9H4C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H9V16Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  question_o: {
    path: (
      <g>
        <path
          d="M12.8827 8.28568C12.8827 8.64368 12.8346 8.95582 12.6694 9.24956C12.5133 9.53413 12.215 9.83246 11.7744 10.1446L11.3475 10.4613C11.0905 10.6448 10.8977 10.8284 10.7692 11.012C10.738 11.06 10.712 11.1158 10.6904 11.176C10.587 11.4644 10.3553 11.7142 10.0489 11.7142H9.64804C9.32152 11.7142 9.06058 11.4371 9.1634 11.1272C9.22633 10.9376 9.31056 10.7582 9.40607 10.6127C9.59884 10.3098 9.87881 10.0298 10.246 9.77279C10.6407 9.49741 10.9207 9.25415 11.0859 9.04303C11.2511 8.8319 11.3338 8.59782 11.3338 8.3408C11.3338 8.01034 11.2282 7.75331 11.0171 7.56973C10.8059 7.37696 10.503 7.28057 10.1083 7.28057C9.73194 7.28057 9.41525 7.39073 9.15822 7.61103C8.9572 7.78334 8.82355 7.99777 8.75729 8.25431L7.23633 7.87407C7.39134 7.37242 7.6648 6.96346 8.05669 6.64719C8.57992 6.22494 9.19947 6 10.0256 6C10.9068 6 11.655 6.21576 12.1599 6.61965C12.6648 7.01437 12.8827 7.57886 12.8827 8.28568Z"
          fill="currentColor"
        />
        <path
          d="M9.61949 13.9999C9.3039 13.9999 9.04807 13.7441 9.04807 13.4285V13.0705C9.04807 12.7549 9.3039 12.4991 9.61949 12.4991H10.0876C10.4032 12.4991 10.6591 12.7549 10.6591 13.0705V13.4285C10.6591 13.7441 10.4032 13.9999 10.0876 13.9999H9.61949Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  question: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM12.8827 8.28568C12.8827 8.64368 12.8346 8.95582 12.6694 9.24956C12.5133 9.53413 12.215 9.83246 11.7744 10.1446L11.3475 10.4613C11.0905 10.6448 10.8977 10.8284 10.7692 11.012C10.738 11.06 10.712 11.1158 10.6904 11.176C10.587 11.4644 10.3553 11.7142 10.0489 11.7142H9.64804C9.32152 11.7142 9.06058 11.4371 9.1634 11.1272C9.22633 10.9376 9.31056 10.7582 9.40607 10.6127C9.59884 10.3098 9.87881 10.0298 10.246 9.77279C10.6407 9.49741 10.9207 9.25415 11.0859 9.04303C11.2511 8.8319 11.3338 8.59782 11.3338 8.3408C11.3338 8.01034 11.2282 7.75331 11.0171 7.56973C10.8059 7.37696 10.503 7.28057 10.1083 7.28057C9.73194 7.28057 9.41525 7.39073 9.15822 7.61103C8.9572 7.78334 8.82355 7.99777 8.75729 8.25431L7.23633 7.87407C7.39134 7.37242 7.6648 6.96346 8.05669 6.64719C8.57992 6.22494 9.19947 6 10.0256 6C10.9068 6 11.655 6.21576 12.1599 6.61965C12.6648 7.01437 12.8827 7.57886 12.8827 8.28568ZM9.61949 13.9999C9.3039 13.9999 9.04807 13.7441 9.04807 13.4285V13.0705C9.04807 12.7549 9.3039 12.4991 9.61949 12.4991H10.0876C10.4032 12.4991 10.6591 12.7549 10.6591 13.0705V13.4285C10.6591 13.7441 10.4032 13.9999 10.0876 13.9999H9.61949Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  question_mark: {
    path: (
      <g>
        <path
          d="M14.6266 8.68682C14.9158 8.17276 15 7.62651 15 7C15 5.76305 14.6186 4.77517 13.735 4.08441C12.8515 3.37758 11.5422 3 9.99999 3C8.5542 3 7.46998 3.39365 6.55431 4.1326C5.86848 4.68608 5.38993 5.40178 5.11865 6.27969L7.78038 6.94512C7.89633 6.49616 8.13021 6.1209 8.48202 5.81935C8.93182 5.43381 9.48604 5.24104 10.1447 5.24104C10.8354 5.24104 11.3656 5.40971 11.735 5.74706C12.1045 6.06835 12.2893 6.51815 12.2893 7.09646C12.2893 7.54626 12.1447 7.9559 11.8555 8.32537C11.5664 8.69485 11.0764 9.12056 10.3856 9.60248C9.74307 10.0523 9.25311 10.5422 8.91576 11.0724C8.74863 11.327 8.60121 11.6408 8.49109 11.9728C8.31115 12.5151 8.76781 13 9.33922 13H10.0408C10.5769 13 10.9825 12.5629 11.1634 12.0582C11.2012 11.9528 11.2467 11.8551 11.3013 11.7712C11.5262 11.4499 11.8636 11.1286 12.3134 10.8073L13.0603 10.2531C13.8314 9.7069 14.3535 9.18481 14.6266 8.68682Z"
          fill="currentColor"
        />
        <path
          d="M8.28925 16.0001C8.28925 16.5524 8.73697 17.0001 9.28925 17.0001H10.1085C10.6608 17.0001 11.1085 16.5524 11.1085 16.0001V15.3736C11.1085 14.8213 10.6608 14.3736 10.1085 14.3736H9.28925C8.73697 14.3736 8.28925 14.8213 8.28925 15.3736V16.0001Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  refresh: {
    path: (
      <g>
        <path
          d="M16.4027 12.8308C17.8352 9.60108 16.6285 5.74433 13.4999 3.93801C12.0464 3.09885 10.4171 2.84018 8.88035 3.09007L9.40171 5.03581C10.4393 4.90998 11.525 5.10722 12.4999 5.67007C14.6706 6.92333 15.546 9.55847 14.6566 11.8227L13.321 11.0516L13.696 15.5983L17.821 13.6497L16.4027 12.8308Z"
          fill="currentColor"
        />
        <path
          d="M6.49986 16.0624C3.37124 14.2561 2.1645 10.3993 3.59707 7.16957L2.17871 6.35067L6.30371 4.40212L6.67871 8.94875L5.34313 8.17765C4.45369 10.4419 5.32915 13.0771 7.49986 14.3303C8.47475 14.8932 9.56039 15.0904 10.598 14.9646L11.1194 16.9103C9.58266 17.1602 7.95333 16.9015 6.49986 16.0624Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  warning: {
    path: (
      <g>
        <path
          d="M9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8V10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10V8Z"
          fill="currentColor"
        />
        <path
          d="M10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.2635 3.02335C9.03129 1.67972 10.9687 1.67972 11.7365 3.02335L18.0133 14.0078C18.7752 15.3411 17.8125 17.0001 16.2768 17.0001H3.72317C2.18753 17.0001 1.22479 15.3411 1.98668 14.0078L8.2635 3.02335ZM16.2768 15.0001L9.99999 4.01563L3.72317 15.0001L16.2768 15.0001Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  paste: {
    path: (
      <g>
        <rect x="7" y="6" width="6" height="9" fill="white" />
        <path
          d="M3 6C3 3.79086 4.79086 2 7 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H7C5.89543 4 5 4.89543 5 6V15C5 15.5523 4.55228 16 4 16C3.44772 16 3 15.5523 3 15V6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 5H8C6.89543 5 6 5.89543 6 7V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16V7C18 5.89543 17.1046 5 16 5H15V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V5ZM9 7H8V16H16V7H15C15 7.55228 14.5523 8 14 8H10C9.44772 8 9 7.55228 9 7ZM11 5H13V6H11V5Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  person: {
    path: (
      <g>
        <path
          d="M10.0002 10C11.6571 10 13.0002 8.65685 13.0002 7C13.0002 5.34315 11.6571 4 10.0002 4C8.34337 4 7.00023 5.34315 7.00023 7C7.00023 8.65685 8.34337 10 10.0002 10Z"
          fill="currentColor"
        />
        <path
          d="M17.9119 14.9342C17.3597 11.8182 14.2655 11 10.0002 11C4.16931 11 2.41495 12.535 2.0697 14.9327C1.9744 15.5945 2.35523 16.1957 3.00151 16.3674C4.07543 16.6527 6.16953 17 10.0002 17C13.8309 17 15.925 16.6527 16.9989 16.3674C17.6452 16.1957 18.0286 15.5926 17.9119 14.9342Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  dai: {
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.91719 3H9.43467C12.7908 3 15.3348 4.80391 16.2812 7.42881H18V9.01534H16.6431C16.6697 9.26602 16.6832 9.52142 16.6832 9.78091V9.81988C16.6832 10.1121 16.6661 10.3993 16.6325 10.6806H18V12.2671H16.2485C15.2771 14.8554 12.7528 16.6421 9.43467 16.6421H3.91719V12.2671H2V10.6806H3.91719V9.01534H2V7.42881H3.91719V3ZM5.45965 12.2671V15.2189H9.43467C11.8876 15.2189 13.71 14.0367 14.5584 12.2671H5.45965ZM15.0309 10.6806H5.45965V9.01534H15.0334C15.0689 9.27737 15.087 9.54598 15.087 9.81988V9.85886C15.087 10.1391 15.068 10.4134 15.0309 10.6806ZM9.43467 4.42087C11.8989 4.42087 13.7268 5.63433 14.5701 7.42881H5.45965V4.42087H9.43467Z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 20 20",
  },
  dai_round: {
    path: (
      <g>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.20749 7.29077H12.0168C14.3339 7.29077 16.0903 8.53619 16.7437 10.3484H17.9303V11.4438H16.9936C17.0119 11.6169 17.0213 11.7932 17.0213 11.9724V11.9993C17.0213 12.201 17.0094 12.3993 16.9862 12.5935H17.9303V13.6888H16.7211C16.0505 15.4758 14.3077 16.7094 12.0168 16.7094H8.20749V13.6888H6.88379V12.5935H8.20749V11.4438H6.88379V10.3484H8.20749V7.29077ZM9.27242 13.6888V15.7268H12.0168C13.7103 15.7268 14.9685 14.9106 15.5542 13.6888H9.27242ZM15.8805 12.5935H9.27242V11.4438H15.8822C15.9067 11.6247 15.9192 11.8102 15.9192 11.9993V12.0262C15.9192 12.2196 15.9061 12.409 15.8805 12.5935ZM12.0168 8.27175C13.7181 8.27175 14.9801 9.10952 15.5623 10.3484H9.27242V8.27175H12.0168Z"
          fill="white"
        />
      </g>
    ),
    viewBox: "0 0 24 24",
  },
  dai_round_color: {
    path: (
      <g>
        <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.20749 7.29077H12.0168C14.3339 7.29077 16.0903 8.53619 16.7437 10.3484H17.9303V11.4438H16.9936C17.0119 11.6169 17.0213 11.7932 17.0213 11.9724V11.9993C17.0213 12.201 17.0094 12.3993 16.9862 12.5935H17.9303V13.6888H16.7211C16.0505 15.4758 14.3077 16.7094 12.0168 16.7094H8.20749V13.6888H6.88379V12.5935H8.20749V11.4438H6.88379V10.3484H8.20749V7.29077ZM9.27242 13.6888V15.7268H12.0168C13.7103 15.7268 14.9685 14.9106 15.5542 13.6888H9.27242ZM15.8805 12.5935H9.27242V11.4438H15.8822C15.9067 11.6247 15.9192 11.8102 15.9192 11.9993V12.0262C15.9192 12.2196 15.9061 12.409 15.8805 12.5935ZM12.0168 8.27175C13.7181 8.27175 14.9801 9.10952 15.5623 10.3484H9.27242V8.27175H12.0168Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="-0.833333"
            x2="12"
            y2="24.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9A606" />
            <stop offset="1" stopColor="#FBCC5F" />
          </linearGradient>
        </defs>
      </g>
    ),
    viewBox: "0 0 24 24",
  },
  maker: {
    path: (
      <g>
        <path
          d="M3.24685 14.2094V7.76981L8.13037 11.4449V14.2094H9.37722V11.1856C9.37722 10.9571 9.26983 10.7419 9.08724 10.6045L3.16468 6.1475C2.68535 5.78678 2 6.12875 2 6.72865V14.2094H3.24685Z"
          fill="currentColor"
        />
        <path
          d="M16.7531 14.2094V7.76981L11.8696 11.4449V14.2094H10.6228V11.1856C10.6228 10.9571 10.7302 10.7419 10.9128 10.6045L16.8353 6.1475C17.3147 5.78678 18 6.12875 18 6.72865V14.2094H16.7531Z"
          fill="currentColor"
        />
      </g>
    ),
    viewBox: "0 0 20 20",
  },
  maker_round: {
    path: (
      <g>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"
        />
        <path
          d="M6.93514 15.157V10.3274L10.5978 13.0836V15.157H11.5329V12.8892C11.5329 12.7178 11.4524 12.5564 11.3154 12.4534L6.87351 9.11062C6.51401 8.84009 6 9.09656 6 9.54649V15.157H6.93514Z"
          fill="white"
        />
        <path
          d="M17.0649 15.157V10.3274L13.4022 13.0836V15.157H12.4671V12.8892C12.4671 12.7178 12.5476 12.5564 12.6846 12.4534L17.1265 9.11062C17.486 8.84009 18 9.09656 18 9.54649V15.157H17.0649Z"
          fill="white"
        />
      </g>
    ),
    viewBox: "0 0 24 24",
  },
  maker_round_color: {
    path: (
      <g>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#1AAB9B"
        />
        <path
          d="M6.93514 15.157V10.3274L10.5978 13.0836V15.157H11.5329V12.8892C11.5329 12.7178 11.4524 12.5564 11.3154 12.4534L6.87351 9.11062C6.51401 8.84009 6 9.09656 6 9.54649V15.157H6.93514Z"
          fill="white"
        />
        <path
          d="M17.0649 15.157V10.3274L13.4022 13.0836V15.157H12.4671V12.8892C12.4671 12.7178 12.5476 12.5564 12.6846 12.4534L17.1265 9.11062C17.486 8.84009 18 9.09656 18 9.54649V15.157H17.0649Z"
          fill="white"
        />
      </g>
    ),
    viewBox: "0 0 24 24",
  },
};

export const Icon = ({
  name,
  size = 3,
  color = "currentColor",
  role = "presentation",
  focusable = "false",
  sx,
  ...rest
}) => {
  const { theme } = useThemeUI();
  const icons = { ...theme.icons };

  if (!icons[name]) {
    console.error(`No icon found with name ${name}`);
    return null;
  }

  return (
    <Box
      as="svg"
      sx={{ ...sx, size: size }}
      viewBox={icons[name].viewBox || "0 0 24 24"}
      color={color}
      display="inline-block"
      verticalAlign="middle"
      focusable={focusable}
      role={role}
      {...rest}
    >
      {icons[name].path}
    </Box>
  );
};
