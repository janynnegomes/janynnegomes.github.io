import { PAGE_URL } from "../enums/page.enum";

export const PAGES = {
    HOME:{
        path: PAGE_URL.HOME,
        data:{
            navTitle:'Home',
            title: 'Bem vindo',
            subtitle: '',
            icon: 'fas fa-home'
        }
    },
    PORTFOLIO:{
        path: PAGE_URL.PROJECT,
        data:{
            navTitle:'Portfólio',
            title: 'Portfólio',
            subtitle: 'Conheça os projetos nos quais já trabalhei',
            icon: 'fas fa-laptop-code'
        }
    },
    SERVICES:{
        path: PAGE_URL.SERVICES,
        data:{
            navTitle:'Serviços',
            title: 'Serviços',
            subtitle: 'Veja de quais maneiras posso ajudar seu negócio',
            icon: 'fas fa-briefcase'
        }
    },
    ABOUT:{
        path: PAGE_URL.ABOUT,
        data:{
            navTitle:'Sobre mim',
            title: 'Sobre mim',
            subtitle: 'Conheça um pouco mais da minha história',
            icon: 'fas fa-user-astronaut'
        }
    },
    CONTACT:{
        path: PAGE_URL.CONTACT,
        data:{
            navTitle:'Contato',
            title: 'Contato',
            subtitle: 'Me encontre por um desses canais',
            icon: 'fas fa-at'
        }
    }
}