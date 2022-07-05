import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {SidebarCategories} from '../../components/Sidebar/SidebarCategories/SidebarCategories'
import {Breadcrumbs} from '../../components/Breadcrumbs/Breadcrumds'

export const Warranty = () => (
  <Container>
    <Row className="justify-content-end">
      <Col md={3}>
        <SidebarCategories/>
      </Col>
      <Col md={9}>
        <Breadcrumbs/>
        <h1>Условия возврата товара</h1>
        <div className="text-section">
          <h2>Обмен и возврат</h2>
          <p>В соответствии со статьями 8 и 9 Закона Украины «О защите прав потребителей» наши покупатели могут обменять или вернуть любую единицу товара, приобретенную в интернет-магазине «{process.env.REACT_APP_SITE_NAME}» в течение 14 дней.</p>
          <p>Исключение составляет товар с индивидуально-определяющими свойствами, т.е. выполненный под заказ для конкретного покупателя.</p>
          <h3>Возврат или замена товара надлежащего качества:</h3>
          <ol>
            <li>Наличие документа, подтверждающего покупку в нашем магазине. Это гарантийный талон, паспорт изделия,
              товарная накладная или чек.
            </li>
            <li>У товара, подлежащего обмену, должен быть сохранен товарный вид и полная комплектация (включая
              инструкции и прочие документы).
            </li>
            <li>С момента покупки не должно пройти более 14 дней.</li>
            <li>Затраты по возврату товара надлежащего качества ложаться на покупателя.</li>
            <li>Порядок: позвонить нам и предупредить, что вы собираетесь отправить товар и получить нужный адрес, написать заявление на возврат от руки, вложить чек с нашего магазина, который вы получили вместе с товаром, отправить купленный товар не битый, без следов монтажа, а также с неповрежденной упаковкой. Товар, который находился в использовании и/или не сохранил свои потребительские качества, возврату не подлежит (кроме гарантийных случаев).</li>
          </ol>
          <h3>Возврат или замена товара ненадлежащего качества:</h3>
          <ul>
            <li>Наличие документа, подтверждающего покупку в нашем магазине. Это гарантийный талон, паспорт изделия, товарная накладная или чек</li>
            <li>может быть заменен на аналогичный в течении 14 дней с момента получения заявления на возврат;</li>
            <li>заменен любым другим товаром из ассортимента нашего интернет-магазине с соответствующим перерасчетом;</li>
            <li>покупатель может вернуть свои деньги.</li>
            <li>Затраты по возврату товара ненадлежащего качества ложаться на продавца.</li>
            <li>Порядок: позвонить нам и предупредить, что вы собираетесь отправить товар ненадлежащего качества и получить нужный адрес, написать заявление на возврат от руки, вложить чек с нашего магазина, который вы получили вместе с товаром, отправить купленный товар.</li>
          </ul>
          <p>Возврат денежных средств производится только на личную карту покупателя в срок от 1 до 7 дней с момента получения нами товара для обмена.</p>
          <h3>В каких случаях товар возврату и обмену не подлежит.</h3>
          <ol>
            <li>Если товар выполнялся под индивидуальный заказ покупателя.</li>
            <li>Если с момента покупки прошло более 14 дней.</li>
            <li>Если отсутствует документ, подтверждающий факт покупки.</li>
            <li>Если у товара, подлежащего обмену, нарушен товарный вид или комплектация.</li>
            <li>Если сервисный центр выявит, что поломка произошла вследствие нарушения эксплуатационных правил покупателем.</li>
            <li>Если товар был в употреблении (в случае замены товара надлежащего качества).</li>
            <li>Если товар возвращается с повреждениями.</li>
          </ol>
          <p>Чтобы избежать неприятных сюрпризов, мы рекомендуем проверять полученный товар в курьерской службе и в случае обнаружения дефектов, составлять соответствующий акт и отказываться от товара. В этом случае за поврежденный товар несет ответственность перевозчик или фирма-отправитель.</p>
          <h2>Категориии товаров которые не подлежать возврату</h2>
          <ul>
            <li>Дизайнерские обогреватели;</li>
            <li>Саморегулирующийся кабель.</li>
          </ul>
          <h2>Гарантии</h2>
          <p>Интернет-магазин «{process.env.REACT_APP_SITE_NAME}» сотрудничает только с надежными фирмами-производителями, предоставляющими на свой товар обязательную гарантию.</p>
          <p>Каждая единица товара сопровождается техническим паспортом и гарантийным талом, где указано:</p>
          <ul>
            <li>наименование товара;</li>
            <li>срок гарантийного обслуживания;</li>
            <li>дата продажи.</li>
          </ul>
          <p>Так же в гарантийном талоне указаны адреса и телефоны сервисных центров, производящих гарантийное обслуживание изделий.</p>
          <h3>В каких случаях не производится гарантийное обслуживание.</h3>
          <ol>
            <li>Если экспертизой доказан факт нарушения потребителем правил установки и эксплуатации.</li>
            <li>Истек срок гарантийного обслуживания.</li>
            <li>Отсутствует гарантийный талон или другой документ, подтверждающий факт нахождения товара на гарантийном обслуживании.</li>
          </ol>
          <p>Все вопросы, касающиеся обмена, возврата, сроков гарантии и гарантийного обслуживания товаров, вы всегда можете выяснить у менеджеров, осуществляющих продажу.</p>
          <h3>Возврат товара вы можете сделать по адресу:</h3>
          <p>Украина, Киевская обл, г. Ирпень, ул. Чехова, 11.</p>
        </div>
      </Col>
    </Row>
  </Container>
)