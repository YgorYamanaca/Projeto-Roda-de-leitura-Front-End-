import React, {useRef, useEffect, useLayoutEffect, useState} from 'react';
import { EventAnalyticsBox, TopText, AnalyticContent, GraphicContent } from './styles';
import StandartButton from '../StandartButton';
import { isMobile } from "react-device-detect";
import { HorizontalBar, Pie } from 'react-chartjs-2';

function EventAnalyticComponent({isRender, subscribes}){
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [universityData, setUniversityData] = useState( {datasets:[], labels:[]} );
    const [centerData, setCenterData] = useState( {datasets:[], labels:[]} );
    const [birthData, setBirthData] = useState( {datasets:[], labels:[]} );
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
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                isRender()
              }
          }
  
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              // Unbind the event listener on clean up
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    function calculateAge(date) { 
        let auxDate = new Date(date)
        var diff_ms = Date.now() - auxDate.getTime();
        var age_dt = new Date(diff_ms); 
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  useLayoutEffect(() => {
    let dataFaculdade = subscribes.reduce((newArray, subscribe) => {
        if(subscribe.faculdade)
        {
            newArray[`${subscribe.faculdade}`] = (newArray[`${subscribe.faculdade}`] || 0 ) + 1
        }
        else
        {
            newArray[`Outros`] = (newArray[`Outros`] || 0 ) + 1
        }
        return newArray
    }, [])

    let dataCentro = subscribes.reduce((newArray, subscribe) => {
        if(subscribe.centro)
        {
            newArray[`${subscribe.centro}`] = (newArray[`${subscribe.centro}`] || 0 ) + 1
        }
        else
        {
            newArray[`Outros`] = (newArray[`Outros`] || 0 ) + 1
        }
        return newArray
    }, [])

    let dataBirth = subscribes.reduce((newArray, subscribe) => {
        if(subscribe.data_nasc)
        {
            subscribe.data_nasc = calculateAge(subscribe.data_nasc)
            newArray[`${subscribe.data_nasc}`] = (newArray[`${subscribe.data_nasc}`] || 0 ) + 1
        }
        else
        {
            newArray[`Outros`] = (newArray[`Outros`] || 0 ) + 1
        }
        return newArray
    }, [])

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
    // let data = {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //         {
    //             label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 255, 0.2)',
    //             'rgba(255, 159, 64, 0.2)',
    //         ],
    //         borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //             'rgba(255, 159, 64, 1)',
    //         ],
    //         borderWidth: 1,
    //         },
    //     ],
    //    }
  }, [subscribes])

    return (
        <EventAnalyticsBox ref={wrapperRef} mobile={isMobile}>
            <TopText mobile={isMobile}>Estátistica do evento</TopText>
            <AnalyticContent>
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
            </AnalyticContent>

            {birthData?
                <GraphicContent>
                    Idade dos inscritos
                    <Pie data={birthData}/>
                </GraphicContent> : null}
        </EventAnalyticsBox>
    );
}

export default  React.memo(EventAnalyticComponent);