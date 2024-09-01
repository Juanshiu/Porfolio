import { WobbleCard } from "./acertenity/wobble-card";
import Timeset from "./Timeset";

export function WobbleCardDemo() {
return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">

        <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-[44rem] sm:h-[35rem] bg-lime-700 min-h-[515px] lg:min-h-[400px]"
            className=""
        >
            <div className=" w-full">
                <h2 className="text-left flex gap-2 items-center text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                    <img className=" pb-1" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Briefcase.png" alt="Briefcase" width="35" height="35" /> 
                    <span>En el trabajo</span>
                </h2>
                <div className=" flex flex-col text-left text-lg text-neutral-200 gap-4 mt-4">
                    <p>
                        Con dos años de experiencia en el desarrollo de software, 
                        me destaco por mi compromiso con los plazos de entrega y mi capacidad de organización. Disfruto del trabajo en equipo,
                        aportando ideas y colaborando para lograr objetivos comunes.  
                    </p>
                    <p>
                        Apasionado por la simplicidad y la eficiencia, busco crear soluciones limpias y escalables. 
                        Constantemente me actualizo en las últimas tecnologías para mantenerme a la vanguardia del sector. 
                        Soy proactivo, con excelentes habilidades de comunicación y gran capacidad de adaptación. 
                    </p>
                </div>
            </div>
            <img
                src="/images/Snap.webp"
                width={550}
                height={550}
                alt="linear demo image"
                className=" mx-auto mt-8 rounded-2xl"
            />
            
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-cyan-600">
            <h2 className="max-w-80 flex items-center gap-2 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                <img className=" pb-1"  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Raising%20Hand.png" alt="Person Raising Hand" width="35" height="35" />
                <span>Un poco de mi</span>
            </h2>
            <div className="mt-4 flex flex-col gap-2 text-left text-lg text-neutral-200">
                <p>
                    Me gusta aprender cosas nuevas y disfruto enfrentándome a nuevos retos que me permitan crecer. Soy una persona organizada y me esfuerzo por ser diligente con los plazos de entrega.
                </p>
                <p>
                    Además, me considero observador, lo que me ayuda a la hora de identificar y resolver problemas.
                </p>
            </div>
        </WobbleCard>

        

        <WobbleCard containerClassName="col-span-1 bg-purple-600">
            <h2 className="max-w-80 flex items-center gap-2 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                <img className=" pb-1"  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/House%20with%20Garden.png" alt="House with Garden" width="35" height="35" />
                <p>Ubicación</p>
            </h2>
            <div className=" grid h-full place-content-center">
                <div className=" flex flex-col items-center pb-4">
                    <p className="  text-[26px]">
                        Desde <span className=" font-semibold ">Neiva - Huila</span>
                    </p>
                    <span className=" text-xl font-semibold">Colombia</span>
                </div>
                <hr className=" w-full" />
                <div>
                    <span className=" text-center">
                        <Timeset/>
                    </span>
                </div>
            </div>
        </WobbleCard>
        
        <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800"
            className=""
        >
            <div className=" w-full">
                <h2 className="text-left mb-4 flex gap-2 items-center text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Graduation%20Cap.png" alt="Graduation Cap" width="35" height="35" />                    
                    <p>Educación</p>
                </h2>
                <div className=" grid gap-4">
                    <div>
                        <p className=" text-2xl font-semibold"> Ingeniería de Sistemas - Corporación Unificada Nacional de Educación Superior</p>
                        <p className=" text-lg text-neutral-200">Virtual | Agosto de 2024 - Actualmente</p>
                    </div>
                    <div>
                        <p className=" text-2xl font-semibold"> Tecnología en Desarrollo de Software - Surcolombiana</p>
                        <p className=" text-lg text-neutral-200">Neiva - Huila | Febrero de 2022 - Agosto de 2024</p>
                    </div>
                    <div>
                        <p className=" text-2xl font-semibold"> Técnico en Sistemas - Sena</p>
                        <p className=" text-lg text-neutral-200">Palermo - Huila | Febrero de 2020 - Septiembre de 2021</p>
                    </div>
                </div>
            </div>

        </WobbleCard>
        
    </div>
    );
}
