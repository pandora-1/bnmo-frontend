import Link from 'next/link'

const Navbar = () => {
    return(
        <nav class="navbar mx-3">
            <div class="container-fluid">
                <h1 class="navbar-brand font-weight-bold my-3" style={{color: "#102866"}}>BNMO Bank</h1>
                <form class="d-flex">
                    <Link href="/login"><a><button class="btn btn-outline-primary mx-2" type="submit">Sign In</button></a></Link>
                    <Link href="/register"><a><button class="btn btn-primary" type="submit">Sign Up</button></a></Link>
                </form>
            </div>
        </nav>
    )
}

export default Navbar