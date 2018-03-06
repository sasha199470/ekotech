function initMap() {
    const center = {lat: 55.7558, lng: 37.6173};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
    });

    markers.forEach(markerInfo => {
        const marker = new google.maps.Marker({
            icon: markerIcon,
            position: markerInfo.position,
            map: map
        });
        const infoWindow = new google.maps.InfoWindow({
            content: markerInfo.content
        });
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

const pathIcon = "M255,0C155.55,0,76.5,79.05,76.5,178.5C76.5,311.1,255,510,255,510s178.5-198.9,178.5-331.5C433.5,79.05,354.45,0,255,0z     M255,242.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75s63.75,28.05,63.75,63.75S290.7,242.25,255,242.25z";
const markerIcon = {
    path: pathIcon,
    fillColor: '#ff7443',
    fillOpacity: 1,
    scale: 0.05
};


const markers = [
    {
        content: "г. Вельск (Архангельская обл.)",
        position: {
            lat: 61.06376,
            lng: 42.0991,
        }
    },
    {
        content: "г. Белгород (Белгородская обл.)",
        position: {
            lat: 50.59971,
            lng: 36.59826
        }
    },
    {
        content: "г. Режь (Свердловская область)",
        position: {
            lat: 57.36658,
            lng: 61.42217
        }
    },
    {
        content: "г. Барнаул (Алтайский край)",
        position: {
            lat: 53.35477,
            lng: 83.76978
        }
    },
    {
        content: "г. Крымск (Краснодарский край)",
        position: {
            lat: 44.92778,
            lng: 37.99321
        }
    },
    {
        content: "г. Орел (Орловская область)",
        position: {
            lat: 52.96684,
            lng: 36.06248
        }
    },
    {
        content: "г. Екатеринбург 1 (Свердловская область)",
        position: {
            lat: 56.83892,
            lng: 60.6057
        }
    },
    {
        content: "г. Всеволoжск (Ленинградская область)",
        position: {
            lat: 60.00986,
            lng: 30.66064
        }
    },
    {
        content: "г. Саранск (Республика Мордовия)",
        position: {
            lat: 54.20004,
            lng: 45.17451
        }
    },
    {
        content: "г. Тамбов (Тамбовская область)",
        position: {
            lat: 52.72359,
            lng: 41.4423
        }
    },
    {
        content: "г. Новгород Великий (Новгородская область)",
        position: {
            lat: 58.52556,
            lng: 31.27419
        }
    },
    {
        content: "г. Александров (Владимирская область)",
        position: {
            lat: 56.39473,
            lng: 38.71203
        }
    },
    {
        content: "г. Борисоглебск (Воронежская область)",
        position: {
            lat: 51.37607,
            lng: 42.07351
        }
    },
    {
        content: "г. Вологда (Вологодская область)",
        position: {
            lat: 59.21806,
            lng: 39.8978
        }
    },
    {
        content: "г. Касимов (Рязанская область)",
        position: {
            lat: 54.94975,
            lng: 41.3974
        }
    },
    {
        content: "г. Магнитогорск (Челябинская область)",
        position: {
            lat: 53.41294,
            lng: 59.00162
        }
    },
    {
        content: "г. Новочеркасск (Ростовская область)",
        position: {
            lat: 47.41776,
            lng: 40.07267
        }
    },
    {
        content: "г. Саратов (Саратовская область)",
        position: {
            lat: 51.59236,
            lng: 45.9608
        }
    },
    {
        content: "г. Сасово (Рязанская область)",
        position: {
            lat: 54.35642,
            lng: 41.91941
        }
    },
    {
        content: "г. Щелково (Московская область)",
        position: {
            lat: 55.91703,
            lng: 38.03693
        }
    },
    {
        content: "г. Элиста (Республика Калмыкия)",
        position: {
            lat: 46.31548,
            lng: 44.2794
        }
    },
    {
        content: "г. Воронеж (Воронежская область)",
        position: {
            lat: 51.67549,
            lng: 39.20888
        }
    },
    {
        content: "г. Ревда (Свердловская область)",
        position: {
            lat: 56.81884,
            lng: 59.90363
        }
    },
    {
        content: "Полоцкая ГЭС (Витебская область, Белоруссия)",
        position: {
            lat: 55.43279,
            lng: 28.94654
        }
    },
    {
        content: "Белопорожская ГЭС (Республика Карелия)",
        position: {
            lat: 65.07673,
            lng: 32.99367
        }
    }
];
