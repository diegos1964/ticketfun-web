import Banner from '@/src/components/Banner';
import EventCard from '@/src/components/EventCard';
import Header from '@/src/components/Header';
import React from 'react';
import ButtonGroup from '../components/ButtonGroup';


const HomePage: React.FC = () => {
  // Lista de eventos de exemplo
  const events = [
    {
      image: 'https://via.placeholder.com/300x200',
      name: 'Blackartel Festival',
      description: 'Descrição do Evento 1',
      location: 'Centro de Convenções - Salvador, BA',
      date:'Friday, 04/07/2023 10:00 PM'
    },
    {
          image: 'https://via.placeholder.com/300x200',
      name: 'Blackartel Festival',
      description: 'Descrição do Evento 2',
      location: 'Centro de Convenções - Salvador, BA',
      date:'Friday, 04/07/2023 10:00 PM'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      name: 'Blackartel Festival',
      description: 'Descrição do Evento 3',
      location: 'Centro de Convenções - Salvador, BA',
      date:'Friday, 04/07/2023 10:00 PM'
    },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Banner />
        <ButtonGroup />
        <h2 className="text-2xl font-bold my-8 text-center">Próximos eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              eventName={event.name}
              eventDescription={event.description}
              eventLocation={event.location}
              eventDate={event.date}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold my-8 text-center">Próximos eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              eventName={event.name}
              eventDescription={event.description}
              eventLocation={event.location}
              eventDate={event.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;