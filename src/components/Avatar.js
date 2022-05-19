export function Avatar({ height = 36, width = 36 }) {
  return (
    <img src="/img/avatar.png" height={height} width={width} alt="avatar" className="h-auto" />
  );
}

function Large() {
  return <Avatar height={64} width={64} />
}

function Small() {
  return <Avatar height={18} width={18} />
}

Avatar.Large = Large;
Avatar.Small = Small;
