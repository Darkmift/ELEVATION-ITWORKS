import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getBuildById } from "../http";
import { Build as BuildType} from "../types";
import { TBody, TD, TH, THeader, TR, Table } from "../components/Table/Table";
import Error from "./Error";

function Build() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentBuild, setCurrentBuild] = useState<BuildType | null>()

  useEffect(() => {
    if (!id) return
    const fetchBuild = async (id: string) => {
      const build = await getBuildById(id)
      setCurrentBuild(build)
    }
    fetchBuild(id)
  }, [id])

  if (!currentBuild) {
    return <Error message="Build is not found"/>
  }

  return (
    <div>
      <Table>
        <THeader>
          <TR rowType="header">
            {Object.keys(currentBuild).map((key) => {
              return <TH key={key}>{key}</TH>;
            })}
          </TR>
        </THeader>
        <TBody>
          <TR rowType={currentBuild.status} key={currentBuild.buildId}>
            {Object.keys(currentBuild).map((key) => {
              return (
                <TD
                  key={currentBuild.buildId + key}
                  classNames={key === 'status' ? 'w-[136px]' : ''}
                  status={key === 'status' ? currentBuild.status : ''}
                >
                  {currentBuild[key as keyof typeof currentBuild]}
                </TD>
              );
            })}
          </TR>
        </TBody>
      </Table>
      <button
        className="border-1 mt-4 rounded border border-stone-700 px-4 py-2"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  )
}

export default Build
