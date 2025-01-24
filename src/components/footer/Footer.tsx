import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center bg-amber-100 text-gray-800">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Bianca Soares | Copyright: {data}
                    </p>
                    <p className='text-lg'>Me encontre nas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/biancasuarz/" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/biancasuarz" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.github.com/biancasuarz" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            { component }
        </>
    )
}

export default Footer