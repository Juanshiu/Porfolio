"use client";
import React, { useEffect, useState } from 'react';

function Timeset() {
    
    const [time, setTime] = useState<{ datetime: string } | null>(null);

    useEffect(() => {
        const fetchTime = async () => {
            const timeUrl = 'https://worldtimeapi.org/api/timezone/America/Bogota';
            try {
                const timeResponse = await fetch(timeUrl);
                const timeData = await timeResponse.json();
                setTime(timeData);
            } catch (error) {
                console.error(error);
            }
        };

    fetchTime();

    const intervalId = setInterval(() => {
        setTime((prevTime) => {
            if (prevTime) {
            const newTime = new Date(new Date(prevTime.datetime).getTime() + 1000);
            return { ...prevTime, datetime: newTime.toISOString() };
            }
            return prevTime;
        });
    }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Opciones para formatear la fecha
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', 
        day: 'numeric',
        month: 'long',
    };
    
    function Mayus(cadena: string) {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

    return ( 
        <>
            {time && 
                <p className=' text-3xl mt-4 font-bold'>{new Date(time.datetime).toLocaleTimeString()} 
                    <p className=' text-lg font-normal'>
                        {Mayus(new Date(time.datetime).toLocaleDateString('es-ES', options))}
                    </p>
                </p>
            }
        </>
    );
}

export default Timeset; 