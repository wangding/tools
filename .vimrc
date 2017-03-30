set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'ternjs/tern_for_vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'jiangmiao/auto-pairs'

call vundle#end()            " required
filetype plugin indent on    " required

" YouCompleteMe 插件的配置
nnoremap <leader>gf :YcmCompleter GoToDefinition<CR>


set number
set relativenumber
set tabstop=2
set shiftwidth=2
set softtabstop=2
set expandtab
set history=1000
set mouse=a
set autoindent
set autoread
set ruler
set ignorecase
set incsearch
set nobackup
set nowb
set noswapfile

nnoremap <CR> G
nnoremap <BS> gg

let mapleader=" "
nnoremap <leader>w :w!<cr>
noremap <leader>j <c-w>j
noremap <leader>k <c-w>k
noremap <leader>h <c-w>h
noremap <leader>l <c-w>l
noremap <leader>d <c-d>
noremap <leader>u <c-u>
noremap <leader>f <c-f>
noremap <leader>b <c-b>
noremap <leader>o <c-o>
noremap <leader>i <c-i>
noremap <leader>e <c-e>
noremap <leader>y <c-y>
noremap <leader>a <c-a>
noremap <leader>v <c-v>

map j gj
map k gk

autocmd BufNewFile,BufReadPost *.md set filetype=markdown

