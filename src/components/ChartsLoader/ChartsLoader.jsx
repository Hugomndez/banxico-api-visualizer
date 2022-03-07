import ContentLoader from 'react-content-loader';

const ChartsLoader = props => {
  return (
    <ContentLoader viewBox='0 0 280 300' height={280} width={300} {...props}>
      <rect x='20' y='5' rx='0' ry='0' width='1' height='170' />
      <rect x='20' y='175' rx='0' ry='0' width='360' height='1' />

      <rect x='40' y='75' rx='0' ry='0' width='35' height='100' />
      <rect x='80' y='125' rx='0' ry='0' width='35' height='50' />
      <rect x='120' y='105' rx='0' ry='0' width='35' height='70' />
      <rect x='160' y='35' rx='0' ry='0' width='35' height='140' />
      <rect x='200' y='55' rx='0' ry='0' width='35' height='120' />
      <rect x='240' y='15' rx='0' ry='0' width='35' height='160' />
      <rect x='280' y='135' rx='0' ry='0' width='35' height='40' />
      <rect x='320' y='85' rx='0' ry='0' width='35' height='90' />
    </ContentLoader>
  );
};

export default ChartsLoader;
