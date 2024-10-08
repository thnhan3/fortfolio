import springbootSvg from '../assets/springboot.svg';
import golangSvg from '../assets/golang.svg';
import nestSvg from '../assets/nestjs.svg';
import postgresqlSvg from '../assets/postgresql.svg';
import mongodbSvg from '../assets/mongodb.svg';
import gitSvg from '../assets/git.svg';
import reactSvg from '../assets/react.svg';

export default function Skills() {
  return (
    <div className="flex flex-col text-white">
      <div className="text-white flex flex-col px-10 py-10">
        <div className="italic text-xl">&lt;Skills&gt;</div>
        <div className="px-10 flex">
          {/* col skills */}
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">
              Skills I posses as a specialist
            </h1>
            <ul style={{ listStyle: 'disc' }}>
              <li>Website development</li>
              <li>Database development</li>
              <li>Java program development</li>
              <li>Design Requirement and analys</li>
            </ul>
          </div>

          <div className="w-1/2">
            {/* grid images of techstack */}
            <div className="grid grid-cols-4 gap-2">
              <img src={springbootSvg} alt="springboot" />
              <img src={golangSvg} alt="Spring" />
              <img src={nestSvg} alt="MySQL" />
              <img src={postgresqlSvg} alt="PostgreSQL" />
              <img src={mongodbSvg} alt="PostgreSQL" />
              <img src={gitSvg} alt="PostgreSQL" />
              <img src={reactSvg} alt="PostgreSQL" />
              <img src={reactSvg} alt="PostgreSQL" />
            </div>
          </div>
        </div>
        {/* advantages section */}
        <section className="my-4">
          <div className="italic mb-4 text-xl">&lt;Advantages&gt;</div>
          <div className="flex flex-row px-6 text-center gap-8">
            <div className="w-1/3 border p-2">
              <span className="font-bold text-xl">Communication</span>
              <p className="break-words">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio modi, natus pariatur, qui ducimus veniam aliquam
                facere earum unde nihil officiis aliquid? Nostrum nemo quae
                optio quibusdam, eos reiciendis harum!
              </p>
            </div>

            <div className="w-1/3 border p-2">
              <span className="font-bold text-xl">Business awareness</span>
              <p className="break-words">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                consequatur.
              </p>
            </div>
            <div className="w-1/3 border p-2">
              <span className="font-bold text-xl">Privacy</span>
              <p className="break-words">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                ex omnis deleniti eius libero quam!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
