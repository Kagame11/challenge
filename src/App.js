function Drink ({name}) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>part of plant</dt>
        <dd>{name === 'tea' ?'leaf': 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15-7- mg/cup' : '80-185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4000+ years' : '1000+ years'}</dd>
      </dl>
    </section>
  )
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
