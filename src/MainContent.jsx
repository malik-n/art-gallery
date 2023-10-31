import "./Maincontent.css"
function MainContent () {
    return (
        <main>
        <section id="welcome">
          <h1>Welcome to the Art Gallery</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quisquam, consequuntur totam voluptate quidem praesentium itaque. Expedita modi non perspiciatis explicabo. Consectetur atque quisquam quaerat nesciunt, culpa fugit rem est?</p>
        </section>
        <section>
        <h2>Featured Artists</h2>
        <h3>Leonardo Da Vinci</h3>
        <div className="text-container">
        <p>One of the great Renaissance painters, Leonardo da Vinci continually tested artistic traditions and techniques. He created innovative compositions, investigated anatomy to accurately represent the human body, considered the human psyche to illustrate character, and experimented with methods of representing space and three-dimensional objects on a two-dimensional surface. The result of his inexhaustible curiosity is many unfinished projects but also some of the most lifelike, complex, and tender representations of human nature. His experiments influenced the art of his successors and often became the standard of representation in subsequent centuries. At his death in 1519, Leonardo left many notebooks filled with jottings and sketches but very few finished works. Some of his pieces were completed by assistants, but others were lost, destroyed, or overpainted.</p>
        </div>
        <aside className="image-container">
       <img src="./public/images/leo-self.jpg" alt="Leonardo da Vinci Self-Portrait" className="image"/>
       </aside>
 </section>
        <section>
        <h2>Featured Paintings</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla maxime maiores ab repellendus velit iste, exercitationem a, consectetur eius aliquid magni quod omnis fugiat earum impedit excepturi beatae veniam.</p>
        </section>
      </main>
    )
}

export default MainContent;