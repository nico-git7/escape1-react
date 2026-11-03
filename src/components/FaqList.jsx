// Lista de preguntas frecuentes que se abren y cierran (con <details>, sin JS).
// La usan la home y las fichas del catálogo. `items`: [{ q, a }]
// El texto queda en el HTML aunque esté cerrado, así Google lo lee igual.
const FaqList = ({ items }) => (
  <div className="faq-list">
    {items.map((item, index) => (
      <details className="faq-item" key={item.q} open={index === 0}>
        <summary>
          {item.q}
          <span className="faq-icon" aria-hidden="true" />
        </summary>
        <p>{item.a}</p>
      </details>
    ))}
  </div>
);

export default FaqList;
