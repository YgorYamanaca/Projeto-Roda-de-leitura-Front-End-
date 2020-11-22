import React, {useRef, useEffect, useLayoutEffect, useState} from 'react';
import { EventAnalyticsBox, TopText, AnalyticContent, GraphicContent } from './styles';
import StandartButton from '../StandartButton';
import { isMobile } from "react-device-detect";
import { Bar , HorizontalBar } from 'react-chartjs-2';

function EventAnalyticComponent({isRender, subscribes}){
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [data, setUniversitydata] = useState( {datasets:[], labels:[]} );
    const options = {
    scales: {
        xAxes: [
        {
            ticks: {
            beginAtZero: true,
            },
        },
        ],
        yAxes: [
            {
                ticks: {
                beginAtZero: true,
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

  useLayoutEffect(() => {
    let faculdadeLabel = subscribes.reduce((newArray, subscribe) => {
        if(subscribe.faculdade && !newArray.includes(subscribe.faculdade))
        {
            newArray.push(subscribe.faculdade)
        }
        return newArray
    }, [])

    setUniversitydata({
        labels:faculdadeLabel,
        datasets: [
            {
            label: 'Estátistica',
            data: [5, 3, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
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
                {data?
                <GraphicContent>
                    Faculdade dos inscritos
                    <Bar  data={data} options={options}/>
                </GraphicContent> : null}

                {data?
                <GraphicContent>
                    Faculdade dos inscritos
                    <HorizontalBar data={data} options={options}/>
                </GraphicContent> : null}

                {data?
                <GraphicContent>
                    Faculdade dos inscritos
                    <HorizontalBar data={data} options={options}/>
                </GraphicContent> : null}
            </AnalyticContent>
        </EventAnalyticsBox>
    );
}

export default  React.memo(EventAnalyticComponent);