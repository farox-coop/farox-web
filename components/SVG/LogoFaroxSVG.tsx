export default function LogoFaroxSVG({
  className,
  charColor,
}: {
  className?: string;
  charColor?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 694 188"
      viewBox="0 0 694 188"
      fill="#fff"
      className={className}
    >
      <path d="M94.8 87.4H29.5V34.1h86.7v-16H13.5v161.8h16v-76.5h65.3zm407.1-29.5c-7.2-12.1-16.9-21.8-29-29-12.1-7.2-25.7-10.8-40.3-10.8H428c-10.6 0-21 2.1-30.7 6.1-9.7 4-18.5 9.9-26.1 17.4-7.5 7.6-13.4 16.4-17.4 26.1-4 9.7-6.1 20-6.1 30.6 0 14.7 3.6 28.3 10.8 40.4 7.2 12.1 16.9 21.9 29 29 12.1 7.2 25.7 10.8 40.4 10.8h4.6c14.7 0 28.2-3.6 40.3-10.8 12.1-7.2 21.9-16.9 29-29 7.2-12.1 10.8-25.7 10.8-40.4.2-14.7-3.5-28.2-10.7-40.4m-13.8 72.8c-5.8 9.7-13.6 17.5-23.3 23.3-9.7 5.7-20.5 8.6-32.3 8.6H428c-11.8 0-22.7-2.9-32.4-8.6-9.7-5.8-17.5-13.6-23.3-23.3-5.7-9.7-8.6-20.6-8.6-32.4 0-8.4 1.6-16.6 4.9-24.4 3.2-7.8 8-14.8 14-20.9 6.1-6 13.1-10.7 20.9-14 7.8-3.2 16-4.9 24.5-4.9h4.6c11.8 0 22.6 2.9 32.3 8.6 9.7 5.8 17.5 13.6 23.3 23.3 5.7 9.7 8.6 20.5 8.6 32.3 0 11.8-2.9 22.7-8.7 32.4"></path>
      <path d="M665.3 18.1h-21.4L584 86.3l-60-68.2h-21.3l70.7 80.3-71.3 81.2 21 .4 61-69.4 61 69.4h21.4l-71.8-81.6zM333.4 66.9c0-26.1-21.4-48.2-46.8-48.2h-57.4v161.1l15.8-.1V34.5h41.6c16.8 0 31 14.8 31 32.4 0 17-13.9 30.8-31 30.8h-24.1l52.7 81.6.3.5h18.9l-43.1-66.5c23.8-2.3 42.1-22.3 42.1-46.4"></path>
      <path
        fill={charColor ?? '#28FFE3'}
        d="M66 179.9h20.5L191.1 49v130.9h16V18.1h-11.4z"
      ></path>
    </svg>
  );
}
