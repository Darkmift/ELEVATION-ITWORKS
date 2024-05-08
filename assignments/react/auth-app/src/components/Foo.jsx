/* eslint-disable react/prop-types */
export default function Foo({ children, color = '#ccc' }) {
  return <div style={{ backgroundColor: color, padding: '2vmin' }}>{children}</div>;
}
