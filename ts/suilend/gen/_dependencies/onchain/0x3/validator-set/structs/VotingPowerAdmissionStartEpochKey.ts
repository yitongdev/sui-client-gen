import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isVotingPowerAdmissionStartEpochKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator_set::VotingPowerAdmissionStartEpochKey`;
}

export interface VotingPowerAdmissionStartEpochKeyFields {
  dummyField: ToField<"bool">;
}

export type VotingPowerAdmissionStartEpochKeyReified = Reified<
  VotingPowerAdmissionStartEpochKey,
  VotingPowerAdmissionStartEpochKeyFields
>;

/**
 * Move struct: `VotingPowerAdmissionStartEpochKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator_set`
 */
export class VotingPowerAdmissionStartEpochKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator_set::VotingPowerAdmissionStartEpochKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = VotingPowerAdmissionStartEpochKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator_set::VotingPowerAdmissionStartEpochKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = VotingPowerAdmissionStartEpochKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: VotingPowerAdmissionStartEpochKeyFields) {
    this.$fullTypeName = composeSuiType(
      VotingPowerAdmissionStartEpochKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator_set::VotingPowerAdmissionStartEpochKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): VotingPowerAdmissionStartEpochKeyReified {
    return {
      typeName: VotingPowerAdmissionStartEpochKey.$typeName,
      fullTypeName: composeSuiType(
        VotingPowerAdmissionStartEpochKey.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator_set::VotingPowerAdmissionStartEpochKey`,
      typeArgs: [] as [],
      isPhantom: VotingPowerAdmissionStartEpochKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        VotingPowerAdmissionStartEpochKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        VotingPowerAdmissionStartEpochKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => VotingPowerAdmissionStartEpochKey.fromBcs(data),
      bcs: VotingPowerAdmissionStartEpochKey.bcs,
      fromJSONField: (field: any) => VotingPowerAdmissionStartEpochKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => VotingPowerAdmissionStartEpochKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        VotingPowerAdmissionStartEpochKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        VotingPowerAdmissionStartEpochKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        VotingPowerAdmissionStartEpochKey.fetch(client, id),
      new: (fields: VotingPowerAdmissionStartEpochKeyFields) => {
        return new VotingPowerAdmissionStartEpochKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VotingPowerAdmissionStartEpochKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<VotingPowerAdmissionStartEpochKey>> {
    return phantom(VotingPowerAdmissionStartEpochKey.reified());
  }
  static get p() {
    return VotingPowerAdmissionStartEpochKey.phantom();
  }

  static get bcs() {
    return bcs.struct("VotingPowerAdmissionStartEpochKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): VotingPowerAdmissionStartEpochKey {
    return VotingPowerAdmissionStartEpochKey.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): VotingPowerAdmissionStartEpochKey {
    if (!isVotingPowerAdmissionStartEpochKey(item.type)) {
      throw new Error("not a VotingPowerAdmissionStartEpochKey type");
    }

    return VotingPowerAdmissionStartEpochKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): VotingPowerAdmissionStartEpochKey {
    return VotingPowerAdmissionStartEpochKey.fromFields(
      VotingPowerAdmissionStartEpochKey.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): VotingPowerAdmissionStartEpochKey {
    return VotingPowerAdmissionStartEpochKey.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): VotingPowerAdmissionStartEpochKey {
    if (json.$typeName !== VotingPowerAdmissionStartEpochKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return VotingPowerAdmissionStartEpochKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): VotingPowerAdmissionStartEpochKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVotingPowerAdmissionStartEpochKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a VotingPowerAdmissionStartEpochKey object`,
      );
    }
    return VotingPowerAdmissionStartEpochKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): VotingPowerAdmissionStartEpochKey {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isVotingPowerAdmissionStartEpochKey(data.bcs.type)
      ) {
        throw new Error(
          `object at ${data.objectId} is not a VotingPowerAdmissionStartEpochKey object`,
        );
      }

      return VotingPowerAdmissionStartEpochKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return VotingPowerAdmissionStartEpochKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<VotingPowerAdmissionStartEpochKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching VotingPowerAdmissionStartEpochKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isVotingPowerAdmissionStartEpochKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a VotingPowerAdmissionStartEpochKey object`);
    }

    return VotingPowerAdmissionStartEpochKey.fromSuiObjectData(res.data);
  }
}
