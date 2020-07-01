import {
  CHANGE_VALUE,
  CREATE_ROOM,
  JOIN_ROOM,
  DROPDOWN_CHANGE,
  SAVE_ROOM_ID,
  CHANGE_TEXT_CHAT,
  CHANGE_TEXT_NOTE,
  RECEIVE_MESSAGE,
  SEND_NOTE,
  TOGGLE_OPEN_CHAT,
  TOGGLE_OPEN_BOOK,
  TOGGLE_OPEN_EDIT,
  TOGGLE_OPEN_BOMB,
  TOGGLE_OPEN_DICE,
  TOGGLE_OPEN_SHARE,
  TOGGLE_OPEN_PLAYERS,
  TOGGLE_OPEN_MENU,
} from '../actions';

import { getNextId } from '../selectors';

const initialState = {
  open: false,
  chatOpen: false,
  bookOpen: false,
  editOpen: false,
  playerNotes: [
    {
      content: 'First note',
      id: 3,
    },
    {
      content: 'Second note',
      id: 2,
    },
  ],
  textNote: '',
  bombOpen: false,
  diceOpen: false,
  pictureOpen: false,
  playersOpen: false,
  active: false,
  logged: false,
  roomName: 'Harry Pouffeur et la Chambre des Kékés',
  roomId: 0,
  masterRole: false,
  playersNb: 0,
  playersList: [
    {
      pseudo: 'Groot',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 7,
      role: '',
    },
    {
      pseudo: 'Rocket',
      icon: 'https://figurinepop.com/public/2019/11/rocketholiday1_1.jpg',
      id: 8,
      role: '',
    },
    {
      pseudo: 'Alphonse',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 9,
      role: '',
    },
    {
      pseudo: 'Patrick',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 10,
      role: '',
    },
    {
      pseudo: 'JeanMi',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 11,
      role: '',
    },
    {
      pseudo: 'Edgard',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 12,
      role: '',
    },
    {
      pseudo: 'Daphné',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 13,
      role: '',
    },
    {
      pseudo: 'Egmond',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 14,
      role: '',
    },
    {
      pseudo: 'Michelle',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 15,
      role: '',
    },
    {
      pseudo: 'Wonder Woman',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 16,
      role: '',
    },
  ],
  textMessage: '',
  chatMessages: [
    {
      author: 'Alphonse',
      content: 'Salut ça farte ?!',
      id: 9,
    },
    {
      author: 'Groot',
      content: 'Ca farte ? Mais bro on dit plus ça depuis 20 ans pfff',
      id: 7,
    },
    {
      author: 'Wonder Woman',
      content: 'Les gars, ça vous dit une virée ce soir ?',
      id: 16,
    },
  ],
};

const room = (state = initialState, action = {}) => {
  switch (action.type) {
    // GENERAL CASES
    case CREATE_ROOM:
      return {
        ...state,
        playersNb: action.playersNb,
        masterRole: true,
      };
    case JOIN_ROOM:
      return {
        ...state,
        playerRole: true,
      };
    case SAVE_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case TOGGLE_OPEN_CHAT:
      return {
        ...state,
        chatOpen: !state.chatOpen,
      };
    case TOGGLE_OPEN_BOOK:
      return {
        ...state,
        bookOpen: !state.bookOpen,
      };
    case TOGGLE_OPEN_EDIT:
      return {
        ...state,
        editOpen: !state.editOpen,
      };
    case TOGGLE_OPEN_BOMB:
      return {
        ...state,
        bombOpen: !state.bombOpen,
      };
    case TOGGLE_OPEN_DICE:
      return {
        ...state,
        diceOpen: !state.diceOpen,
      };
    case TOGGLE_OPEN_SHARE:
      return {
        ...state,
        pictureOpen: !state.pictureOpen,
      };
    case TOGGLE_OPEN_PLAYERS:
      return {
        ...state,
        playersOpen: !state.playersOpen,
      };
    case TOGGLE_OPEN_MENU:
      return {
        ...state,
        active: !state.active,
      };

    // CHATROOM
    case RECEIVE_MESSAGE: {
      // console.log('reducer RECEIVE_MESSAGE', action.chatMessage);
      const newChatMessages = [
        ...state.chatMessages,
      ];
      const newChatMessage = {
        ...action.chatMessage,
      };
      newChatMessages.push(newChatMessage);
      return {
        ...state,
        chatMessages: newChatMessages,
        textMessage: '',
      };
    }
    case CHANGE_TEXT_CHAT:
      return {
        ...state,
        textMessage: action.payload,
      };
      // PLAYER'S NOTES
    case CHANGE_TEXT_NOTE:
      return {
        ...state,
        textNote: action.payload,
      };
    case SEND_NOTE: {
      const newPlayerNotes = [
        ...state.playerNotes,
      ];
      const id = getNextId(state.playerNotes);
      const newNote = {
        content: state.textNote,
        id,
      };
      newPlayerNotes.push(newNote);
      return {
        ...state,
        playerNotes: newPlayerNotes,
        textNote: '',
      };
    }
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case DROPDOWN_CHANGE:
      return {
        ...state,
        playersNb: action.selectedValue,
      };
    default:
      return state;
  }
};

export default room;
