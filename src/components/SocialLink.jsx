export default function SocialLink({ item }) {
  const { link, icon: Icon } = item;
  console.log('SocialLink render');

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {<Icon />}
    </a>
  );
}
