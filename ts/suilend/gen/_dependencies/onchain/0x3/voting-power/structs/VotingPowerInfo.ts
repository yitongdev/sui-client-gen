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

export function isVotingPowerInfo(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::voting_power::VotingPowerInfo`;
}

export interface VotingPowerInfoFields {
  validatorIndex: ToField<"u64">;
  votingPower: ToField<"u64">;
}

export type VotingPowerInfoReified = Reified<
  VotingPowerInfo,
  VotingPowerInfoFields
>;

/**
 * Move struct: `VotingPowerInfo`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::voting_power`
 */
export class VotingPowerInfo implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::voting_power::VotingPowerInfo`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = VotingPowerInfo.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::voting_power::VotingPowerInfo`;
  readonly $typeArgs: [];
  readonly $isPhantom = VotingPowerInfo.$isPhantom;

  readonly validatorIndex: ToField<"u64">;
  readonly votingPower: ToField<"u64">;

  private constructor(typeArgs: [], fields: VotingPowerInfoFields) {
    this.$fullTypeName = composeSuiType(
      VotingPowerInfo.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::voting_power::VotingPowerInfo`;
    this.$typeArgs = typeArgs;

    this.validatorIndex = fields.validatorIndex;
    this.votingPower = fields.votingPower;
  }

  static reified(): VotingPowerInfoReified {
    return {
      typeName: VotingPowerInfo.$typeName,
      fullTypeName: composeSuiType(
        VotingPowerInfo.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::voting_power::VotingPowerInfo`,
      typeArgs: [] as [],
      isPhantom: VotingPowerInfo.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        VotingPowerInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        VotingPowerInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => VotingPowerInfo.fromBcs(data),
      bcs: VotingPowerInfo.bcs,
      fromJSONField: (field: any) => VotingPowerInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => VotingPowerInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        VotingPowerInfo.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        VotingPowerInfo.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        VotingPowerInfo.fetch(client, id),
      new: (fields: VotingPowerInfoFields) => {
        return new VotingPowerInfo([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VotingPowerInfo.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<VotingPowerInfo>> {
    return phantom(VotingPowerInfo.reified());
  }
  static get p() {
    return VotingPowerInfo.phantom();
  }

  static get bcs() {
    return bcs.struct("VotingPowerInfo", {
      validator_index: bcs.u64(),
      voting_power: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): VotingPowerInfo {
    return VotingPowerInfo.reified().new({
      validatorIndex: decodeFromFields("u64", fields.validator_index),
      votingPower: decodeFromFields("u64", fields.voting_power),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): VotingPowerInfo {
    if (!isVotingPowerInfo(item.type)) {
      throw new Error("not a VotingPowerInfo type");
    }

    return VotingPowerInfo.reified().new({
      validatorIndex: decodeFromFieldsWithTypes(
        "u64",
        item.fields.validator_index,
      ),
      votingPower: decodeFromFieldsWithTypes("u64", item.fields.voting_power),
    });
  }

  static fromBcs(data: Uint8Array): VotingPowerInfo {
    return VotingPowerInfo.fromFields(VotingPowerInfo.bcs.parse(data));
  }

  toJSONField() {
    return {
      validatorIndex: this.validatorIndex.toString(),
      votingPower: this.votingPower.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): VotingPowerInfo {
    return VotingPowerInfo.reified().new({
      validatorIndex: decodeFromJSONField("u64", field.validatorIndex),
      votingPower: decodeFromJSONField("u64", field.votingPower),
    });
  }

  static fromJSON(json: Record<string, any>): VotingPowerInfo {
    if (json.$typeName !== VotingPowerInfo.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return VotingPowerInfo.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): VotingPowerInfo {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVotingPowerInfo(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a VotingPowerInfo object`,
      );
    }
    return VotingPowerInfo.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): VotingPowerInfo {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isVotingPowerInfo(data.bcs.type)
      ) {
        throw new Error(`object at is not a VotingPowerInfo object`);
      }

      return VotingPowerInfo.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return VotingPowerInfo.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<VotingPowerInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching VotingPowerInfo object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isVotingPowerInfo(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a VotingPowerInfo object`);
    }

    return VotingPowerInfo.fromSuiObjectData(res.data);
  }
}
