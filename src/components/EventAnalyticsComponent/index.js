import React, {useRef, useEffect, useLayoutEffect, useState} from 'react';
import { EventAnalyticsBox, TopText, AnalyticContent, GraphicContent } from './styles';
import { isMobile } from "react-device-detect";
import { HorizontalBar, Pie } from 'react-chartjs-2';

/** 
 * @description Componente para análise de um evento
 */
function EventAnalyticComponent({isRender, subscribes}){
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [universityData, setUniversityData] = useState( {datasets:[], labels:[]} );
    const [centerData, setCenterData] = useState( {datasets:[], labels:[]} );
    const [birthData, setBirthData] = useState( {datasets:[], labels:[]} );
    const [userType, setUserType] = useState( {datasets:[], labels:[]} );
    const options = {
    scales: {
        maintainAspectRatio: false,
        xAxes: [
        {
            ticks: {
            beginAtZero: true,
            stepSize:1,
            },
        },
        ],
        yAxes: [
            {
                ticks: {
                beginAtZero: true,
                stepSize:1,
                },
            },
            ],
    },
    }

    function useOutsideAlerter(ref) {
      useEffect(() => {
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                isRender()
              }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
  }

  
/** 
 * @description Função para gerar cores aleatória
 */
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/** 
 * @description Função para calcular idade
 */
function calculateAge(date) { 
    let auxDate = new Date(date)
    var diff_ms = Date.now() - auxDate.getTime();
    var age_dt = new Date(diff_ms); 
    
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
  useLayoutEffect(() => {
        let auxData = subscribes;
        let userType = auxData.reduce((newArray, subscribe) => {
            if(subscribe.tipo_usuario === "2")
            {
                newArray[`Aluno`] = (newArray[`Aluno`] || 0 ) + 1
            }
            else if(subscribe.tipo_usuario === "1")
            {
                newArray[`Aluno Externo`] = (newArray[`Aluno Externo`] || 0 ) + 1
            }
            else if(subscribe.tipo_usuario === "3")
            {
                newArray[`Professor`] = (newArray[`Professor`] || 0 ) + 1
            }
            else
            {
                newArray[`Funcionário`] = (newArray[`Funcionário`] || 0 ) + 1
            }
            return newArray
        }, [])

        let dataFaculdade = auxData.reduce((newArray, subscribe) => {
        if(subscribe.faculdade && subscribe.tipo_usuario === "2")
        {
            newArray[`${subscribe.faculdade}`] = (newArray[`${subscribe.faculdade}`] || 0 ) + 1
        }
        else if(subscribe.tipo_usuario === "1")
        {
            newArray[`Aluno Externo`] = (newArray[`Aluno Externo`] || 0 ) + 1
        }
        else if(subscribe.tipo_usuario === "3")
        {
            newArray[`Professor`] = (newArray[`Professor`] || 0 ) + 1
        }
        else
        {
            newArray[`Funcionário`] = (newArray[`Funcionário`] || 0 ) + 1
        }
        return newArray
    }, [])

    let dataCentro = auxData.reduce((newArray, subscribe) => {
        if(subscribe.centro)
        {
            newArray[`${subscribe.centro}`] = (newArray[`${subscribe.centro}`] || 0 ) + 1
        }
        else if(!subscribe.faculdade &&subscribe.tipo_usuario === "1")
        {
            newArray[`Aluno Externo`] = (newArray[`Aluno Externo`] || 0 ) + 1
        }
        else if(!subscribe.faculdade && subscribe.tipo_usuario === "3")
        {
            newArray[`Professor`] = (newArray[`Professor`] || 0 ) + 1
        }
        else if(!subscribe.faculdade && subscribe.tipo_usuario === "4")
        {
            newArray[`Funcionário`] = (newArray[`Funcionário`] || 0 ) + 1
        }
        return newArray
    }, [])

    let dataBirth = auxData.reduce((newArray, subscribe) => {
        if(subscribe.data_nasc)
        {
            subscribe.age = calculateAge(subscribe.data_nasc)
            newArray[`${subscribe.age}`] = (newArray[`${subscribe.age}`] || 0 ) + 1
        }
        return newArray
    }, [])

    
    setUserType({
        labels:Object.keys(userType),
        datasets: [
            {
                label: '# Curso',
                data: Object.values(userType),
                backgroundColor: getRandomColor(),
                borderColor: getRandomColor(),
                borderWidth: 1,
            },
        ],
    })

    setBirthData({
        labels:Object.keys(dataBirth),
        datasets: [
            {
                label: '# Curso',
                data: Object.values(dataBirth),
                backgroundColor: getRandomColor(),
                borderColor: getRandomColor(),
                borderWidth: 1,
            },
        ],
    })

    setUniversityData({
        labels:Object.keys(dataFaculdade),
        datasets: [
            {
                label: '# Curso',
                data: Object.values(dataFaculdade),
                backgroundColor: getRandomColor(),
                borderColor: getRandomColor(),
                borderWidth: 1,
            },
        ],
    })

    setCenterData({
        labels:Object.keys(dataCentro),
        datasets: [
            {
                label: '# Curso',
                data: Object.values(dataCentro),
                backgroundColor: getRandomColor(),
                borderColor: getRandomColor(),
                borderWidth: 1,
            },
        ],
    })
  }, [subscribes])

    return (
        <EventAnalyticsBox ref={wrapperRef} mobile={isMobile}>
            <TopText mobile={isMobile}>Estátistica do evento</TopText>
            <AnalyticContent>

                {userType?
                    <GraphicContent>
                        Faculdade dos inscritos
                        <HorizontalBar data={userType} options={options}/>
                    </GraphicContent> : null}

                {universityData?
                <GraphicContent>
                    Faculdade dos inscritos
                    <HorizontalBar data={universityData} options={options}/>
                </GraphicContent> : null}

                {centerData?
                <GraphicContent>
                    Centro dos inscritos
                    <HorizontalBar data={centerData} options={options}/>
                </GraphicContent> : null}
            

                {birthData?
                    <GraphicContent>
                        Idade dos inscritos
                        <Pie data={birthData}/>
                    </GraphicContent> : null}
            </AnalyticContent>
        </EventAnalyticsBox>
    );
}

export default  React.memo(EventAnalyticComponent);