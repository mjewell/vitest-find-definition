// Should we need the aria-labelledby here?
// What are the right finders?

export default function HelloWorld() {
  return (
    <dl>
      <dt id="whatever">hello</dt>
      <dd aria-labelledby="whatever">world</dd>
    </dl>
  );
}
