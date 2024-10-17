export interface HeaderProps {
  setting?: boolean; // setting 버튼 표시 여부
  bell?: boolean; // bell 버튼 표시 여부
  isBellActive?: boolean; // bell 버튼 활성화 여부
  profile?: boolean; // profile 버튼 표시 여부
}

export const Header = ({
  setting,
  bell,
  isBellActive,
  profile,
  ...props
}: HeaderProps) => (
  <>
    <header className={"justify-between flex items-center p-4"} {...props}>
      <button className="btn_back"></button>
      <div className="flex items-center gap-4">
        {setting && <button className="btn_setting"></button>}{" "}
        {bell && (
          <button
            className={isBellActive ? "btn_bell_active" : "btn_bell"}
          ></button>
        )}{" "}
        {profile && <button className="btn_profile"></button>}{" "}
      </div>
    </header>
  </>
);
