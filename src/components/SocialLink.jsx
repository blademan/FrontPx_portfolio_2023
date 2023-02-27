export default function SocialLink({ item }) {
  const { link, icon: Icon } = item;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {<Icon />}
    </a>
  );
}
