set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'ternjs/tern_for_vim'
Plugin 'jiangmiao/auto-pairs'
Plugin 'vim-syntastic/syntastic'
Plugin 'mattn/emmet-vim'

" 下面的插件需要编译
Plugin 'Valloric/YouCompleteMe'
Plugin 'wincent/command-T'

call vundle#end()            " required
filetype plugin indent on    " required

" YouCompleteMe 插件的配置
nmap <leader>gf :YcmCompleter GoToDefinition<CR>
let g:ycm_semantic_triggers = {'css': [ 're!^\s{4}', 're!:\s+' ]}

" syntastic 插件的配置
set statusline+=%#warningmsg#
set statusline+=%#{SyntasticStatuslineFlag()}#
set statusline+=%*

" 语法检查插件的配置
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_javascript_checkers = ['jsl', 'jshint']
let g:syntastic_html_checkers = ['tidy', 'jshint']

set number                  " 显示行号
set fdm=indent              " 启动代码折叠，如果不希望代码折叠，可以把这一行删除
set relativenumber          " 使用相对行号，如果不希望使用相对行号，可以把这一行删除 
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

" 回车键到文档末尾，退格键到文档开头
nmap <CR> G
nmap <BS> gg

" 设置 <leader> 键为空格键，原 leader 键为 ctrl 键
" <leader>w 就是先按空格键，再按 w 键，作用是保存当前文本
" 复制一个代码文件，在普通模式下，自行体验每种快捷键的用法
let mapleader=" "
nmap <leader>w :w!<cr> 
nmap <leader>j <c-w>j
nmap <leader>k <c-w>k
nmap <leader>h <c-w>h
nmap <leader>l <c-w>l
nmap <leader>d <c-d>
nmap <leader>u <c-u>
nmap <leader>f <c-f>
nmap <leader>b <c-b>
nmap <leader>o <c-o>
nmap <leader>i <c-i>
nmap <leader>e <c-e>
nmap <leader>y <c-y>
nmap <leader>a <c-a>
nmap <leader>v <c-v>
nmap <leader>x :q!<cr>

" 在 C 语言和 JavaScript 中，用 F2 在插入模式下，给代码行尾补充分号
imap <F2> <ESC>$A;<CR>

" 在 normal 模式下一键给当前行增加缩进
nmap <F3> V>

" 在插入模式下移动光标，不用方向键，跟命令行的体验一致
" <c-f> 是 ctrl + f，在插入模式下向右移动光标
" 复制一个代码文件，在插入模式下，自行体验每种快捷键的用法
imap <c-f> <Right>
imap <c-b> <Left>
imap <c-e> <ESC>A
imap <c-a> <ESC>I
imap <c-u> <ESC>ddO
imap <c-w> <ESC>bcw
imap <c-n> <Down>
imap <c-p> <Up>
imap <c-k> <ESC>ld$A
imap <c-d> <ESC>lxi

autocmd BufNewFile,BufReadPost *.md set filetype=markdown
