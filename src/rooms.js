import React from "react";

export function GeneralRoom() {
  return (
    <div className="room">
      <h2>Общая комната</h2>
        <p>Меня зовут Султан, мне 18 лет, я учусь в колледже в последнем 3-тем курсе,
            учусь также в курсах програмирования Geeks на направлении Frontend, почему выбрал именно это направление скажите вы а я отвечу просто по кайфу,
            мое хобби это заниматься спортом и обучения иностранного языка.
        </p>
        <img src="/img/Шралк.img" alt="general" style={{width: 650, height: 400}}/>
    </div>
  );
}

export function DanceRoom() {
  return (
    <div className="room">
      <h2>Танцевальная комната</h2>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fLexgOxsZu0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
  );
}

export function TravelRoom() {
  return (
    <div className="room">
      <h2>Комната для путешествий</h2>
        <p>Я раскажу кратко как я был в Москве. Мое первое путешествие было в 2021 году летом, мне тогда было 15 лет и мы с моей семьей полетели в Москву,
            мы там в основном отдыхали гуляли по паркам были в так называемом Dream island там было очень круто мы были очень рады с моей семьей,
            мы в Москве побывали все лето и побывав во всех классных местах мы улетели с хорошими воспоминаниями.
        </p>
        <img src="/img/сити.img" alt="Travel" style={{width: 650, height: 400, borderRadius: 10}}/>
    </div>
  );
}

export function MusicRoom() {
  return (
    <div className="room">
      <h2>Музыкальная комната</h2>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VKXj5G7Pxiw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
  );
}

