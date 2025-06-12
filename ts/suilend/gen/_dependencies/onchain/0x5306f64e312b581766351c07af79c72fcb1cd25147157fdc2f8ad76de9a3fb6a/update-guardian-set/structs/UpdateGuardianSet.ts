import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { PKG_V1 } from "../../constants.js";
import { Guardian } from "../../guardian/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUpdateGuardianSet(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::update_guardian_set::UpdateGuardianSet`;
}

export interface UpdateGuardianSetFields {
  newIndex: ToField<"u32">;
  guardians: ToField<Vector<Guardian>>;
}

export type UpdateGuardianSetReified = Reified<UpdateGuardianSet, UpdateGuardianSetFields>;

/**
 * Move struct: `UpdateGuardianSet`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::update_guardian_set`
 */
export class UpdateGuardianSet implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::update_guardian_set::UpdateGuardianSet`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UpdateGuardianSet.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::update_guardian_set::UpdateGuardianSet`;
  readonly $typeArgs: [];
  readonly $isPhantom = UpdateGuardianSet.$isPhantom;

  readonly newIndex: ToField<"u32">;
  readonly guardians: ToField<Vector<Guardian>>;

  private constructor(typeArgs: [], fields: UpdateGuardianSetFields) {
    this.$fullTypeName = composeSuiType(
      UpdateGuardianSet.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::update_guardian_set::UpdateGuardianSet`;
    this.$typeArgs = typeArgs;

    this.newIndex = fields.newIndex;
    this.guardians = fields.guardians;
  }

  static reified(): UpdateGuardianSetReified {
    return {
      typeName: UpdateGuardianSet.$typeName,
      fullTypeName: composeSuiType(
        UpdateGuardianSet.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::update_guardian_set::UpdateGuardianSet`,
      typeArgs: [] as [],
      isPhantom: UpdateGuardianSet.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpdateGuardianSet.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateGuardianSet.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpdateGuardianSet.fromBcs(data),
      bcs: UpdateGuardianSet.bcs,
      fromJSONField: (field: any) => UpdateGuardianSet.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpdateGuardianSet.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UpdateGuardianSet.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => UpdateGuardianSet.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => UpdateGuardianSet.fetch(client, id),
      new: (fields: UpdateGuardianSetFields) => {
        return new UpdateGuardianSet([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UpdateGuardianSet.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UpdateGuardianSet>> {
    return phantom(UpdateGuardianSet.reified());
  }
  static get p() {
    return UpdateGuardianSet.phantom();
  }

  static get bcs() {
    return bcs.struct("UpdateGuardianSet", {
      new_index: bcs.u32(),
      guardians: bcs.vector(Guardian.bcs),
    });
  }

  static fromFields(fields: Record<string, any>): UpdateGuardianSet {
    return UpdateGuardianSet.reified().new({
      newIndex: decodeFromFields("u32", fields.new_index),
      guardians: decodeFromFields(reified.vector(Guardian.reified()), fields.guardians),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpdateGuardianSet {
    if (!isUpdateGuardianSet(item.type)) {
      throw new Error("not a UpdateGuardianSet type");
    }

    return UpdateGuardianSet.reified().new({
      newIndex: decodeFromFieldsWithTypes("u32", item.fields.new_index),
      guardians: decodeFromFieldsWithTypes(
        reified.vector(Guardian.reified()),
        item.fields.guardians,
      ),
    });
  }

  static fromBcs(data: Uint8Array): UpdateGuardianSet {
    return UpdateGuardianSet.fromFields(UpdateGuardianSet.bcs.parse(data));
  }

  toJSONField() {
    return {
      newIndex: this.newIndex,
      guardians: fieldToJSON<Vector<Guardian>>(`vector<${Guardian.$typeName}>`, this.guardians),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): UpdateGuardianSet {
    return UpdateGuardianSet.reified().new({
      newIndex: decodeFromJSONField("u32", field.newIndex),
      guardians: decodeFromJSONField(reified.vector(Guardian.reified()), field.guardians),
    });
  }

  static fromJSON(json: Record<string, any>): UpdateGuardianSet {
    if (json.$typeName !== UpdateGuardianSet.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UpdateGuardianSet.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UpdateGuardianSet {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUpdateGuardianSet(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UpdateGuardianSet object`);
    }
    return UpdateGuardianSet.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UpdateGuardianSet {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUpdateGuardianSet(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a UpdateGuardianSet object`);
      }

      return UpdateGuardianSet.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UpdateGuardianSet.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UpdateGuardianSet> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching UpdateGuardianSet object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateGuardianSet(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UpdateGuardianSet object`);
    }

    return UpdateGuardianSet.fromSuiObjectData(res.data);
  }
}
